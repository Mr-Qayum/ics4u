import { useEffect, useRef, useState } from "react";

export const useThrottle = <T>(value: T, delay: number): T => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef<number>(Date.now());

  useEffect(() => {
    const now = Date.now();

    const remaining = delay - (now - lastExecuted.current);

    const timeout = setTimeout(
      () => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      },
      Math.max(remaining, 0),
    );

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return throttledValue;
};
