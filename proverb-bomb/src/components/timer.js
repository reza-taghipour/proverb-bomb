import { useEffect, useState } from 'react';

export function Timer(props) {
  const nextProverb = props.nextProverb;
  const resetTimer = props.resetTimer;
  const setResetTimer = props.setResetTimer;
  const setDropBomb = props.setDropBomb;
  const num = props.num;
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    if (seconds == 0) {
      setDropBomb(true);
      nextProverb(num);
      setSeconds(10);
    } else {
      if (resetTimer === true) {
        setSeconds(10);
        setResetTimer(false);
      }
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);
  return <div>{seconds}</div>;
}
