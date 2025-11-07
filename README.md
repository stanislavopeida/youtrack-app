# YouTrack Projects App

This project is a simple YouTrack App that adds a `MAIN_MENU_ITEM` entry showing:

- A paginated list of available projects (leaders, descriptions, teams).
- A toggle that persists a user-specific boolean flag on the YouTrack backend.
- Controls to seed 70 mock projects or delete them for demo purposes.
- A page-size preference stored and refreshed automatically.

The codebase uses Vite, React, TypeScript, and JetBrains Ring UI.

---

## Requirements

- Node.js 20+
- A YouTrack Cloud instance (or server) with permission to upload apps

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/<your-account>/youtrack-app.git
cd youtrack-app
npm install
```

### 2. Configure YouTrack Access

Generate a permanent token in YouTrack (`Profile → Account Security`). You will pass this token to the upload command. No `.env` file is required because credentials are supplied via CLI flags.

### 3. Build, Validate, and Upload

```bash
npm run build
```

- `build` runs TypeScript, bundles the widget, and calls `youtrack-app validate dist`.

Once the bundle is ready you can deploy it in either of the following ways:

1. **CLI upload (recommended during development)**

   ```bash
   npm run upload -- --host https://<your-instance>.youtrack.cloud --token <perm-token>
   ```

   This command packages `dist/` and publishes it to your instance automatically. After the upload succeeds, open the link printed by the CLI (e.g., `https://<host>/admin/apps?selected=...`) to enable/configure the app.

2. **Manual ZIP upload**

   ```bash
   cd dist
   zip -r ../youtrack-app.zip .
   ```

   Then in YouTrack, go to **Administration → Apps → Add app… → Upload ZIP file…** and choose the ZIP you just created. Enable/configure the app once the upload finishes.

   > **Shortcut:** This repository also contains a pre-built release archive `youtrack-app-v1.0.0.zip`. You can upload that ZIP directly if you don’t want to build locally, but rebuild the bundle whenever you modify the source.

---

## Features

| Area                     | Description                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Project List UI**      | Displays project name, short name, leader avatar/tooltip, markdown description with ellipsis, and team link. Uses Ring UI components. |
| **Pagination**           | Custom `PagerWrapper` fetches total project count, wires Ring UI `Pager`, and persists page size per user.                            |
| **Polling**              | `usePolling` hook keeps page size and project data in sync every 2 seconds without leaking timers.                                    |
| **Actions Panel**        | Buttons to create/delete mock projects and a toggle tied to the backend flag.                                                         |
| **Mock Projects Seeder** | `createMockProjects` inserts 70 curated samples; `deleteAllProjects` removes them. Useful for demos.                                  |
| **Backend Storage**      | `src/backend.js` exposes `/flag` and `/page-size` endpoints; `src/entity-extensions.json` defines the user properties.                |
| **Utilities**            | Strongly typed helpers for YouTrack APIs (`projects`, `pager`, `toggle`, `users`).                                                    |

---

## Repository Layout

- `manifest.json` – App metadata and entry definition.
- `src/backend.js` – HTTP handlers for flag/page-size persistence.
- `src/entity-extensions.json` – Declares user properties (`flag`, `pageSize`).
- `src/widgets/widget/` – Frontend components, styles, and entrypoint.
- `src/utils/` – API helpers and mock data.
- `src/hooks/usePolling.ts` – Reusable polling hook.

---

For any issues or enhancements, open an issue or submit a pull request in this repo.
