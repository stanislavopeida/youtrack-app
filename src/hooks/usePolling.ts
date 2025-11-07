import { useEffect } from "react";

type UsePollingOptions = {
  interval?: number;
  enabled?: boolean;
};

export const usePolling = (
  poller: () => Promise<void>,
  { interval = 2000, enabled = true }: UsePollingOptions = {}
) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const tick = async () => {
      await poller();
      if (cancelled) {
        return;
      }
      timeoutId = setTimeout(tick, interval);
    };

    tick();

    return () => {
      cancelled = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [poller, interval, enabled]);
};
