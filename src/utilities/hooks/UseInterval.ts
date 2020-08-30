import { useEffect, useRef } from 'react';
const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef(() => {});

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  //Call when mounted
  useEffect(() => {
    savedCallback.current();
  }, []);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
export default useInterval;
