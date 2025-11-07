import { Me } from "src/types/youtrackApi";

const host = await YTApp.register();

export const readMyId = async () => {
  const me = await host.fetchYouTrack<Me>("users/me", {
    query: { fields: "id" },
  });

  return me.id;
};
