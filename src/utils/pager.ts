import { readMyId } from "src/utils/users";

const host = await YTApp.register();

export const readPageSize = async () => {
  const myId = await readMyId();
  const response = await host.fetchYouTrack<{ pageSize: number }>(
    `users/${myId}/extensionEndpoints/youtrack-app/backend/page-size`
  );
  const { pageSize } = response;

  return pageSize;
};

export const updatePageSize = async (pageSize: number) => {
  const myId = await readMyId();
  const response = await host.fetchYouTrack<{ success: boolean }>(
    `users/${myId}/extensionEndpoints/youtrack-app/backend/page-size`,
    { method: "POST", body: { pageSize } }
  );
  const { success } = response;

  return success;
};
