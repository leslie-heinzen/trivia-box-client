import { useEffect, useRef } from 'react';

export function useInterval(handler: (...args: any[]) => void, delay: number) {

  const savedCallback = useRef<(...args: any[]) => void>(handler);

  useEffect(() => {
    savedCallback.current = handler;
  }, [handler]);

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