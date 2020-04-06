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

    const id = setInterval(tick, delay);

    return function () {
      return clearInterval(id);
    };
  }, [delay]);
}