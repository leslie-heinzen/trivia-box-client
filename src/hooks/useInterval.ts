import { useEffect, useRef } from 'react';

export function useInterval(callback: (...args: any[]) => void, delay: number) {
  const savedCallback = useRef<(...args: any[]) => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}