import { readMyId } from "src/utils/users";

const host = await YTApp.register();

export const readToggleState = async () => {
  const myId = await readMyId();
  const response = await host.fetchYouTrack<{ flag: boolean }>(
    `users/${myId}/extensionEndpoints/youtrack-app/backend/flag`
  );
  const { flag } = response;

  return flag;
};

export const updateToggleState = async (flag: boolean) => {
  const myId = await readMyId();
  const response = await host.fetchYouTrack<{ success: boolean }>(
    `users/${myId}/extensionEndpoints/youtrack-app/backend/flag`,
    { method: "POST", body: { flag } }
  );
  const { success } = response;

  return success;
};
