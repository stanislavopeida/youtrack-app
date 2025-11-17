import { useEffect } from "react";

type UsePollingOptions = {
  interval?: number;
  enabled?: boolean;
};

const DEFAULT_POLLING_INTERVAL = 2000;

export const usePolling = (
  poller: () => Promise<void>,
  {
    interval = DEFAULT_POLLING_INTERVAL,
    enabled = true,
  }: UsePollingOptions = {}
) => {
  useEffect(() => {
    if (!enabled) {
      return () => {};
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
