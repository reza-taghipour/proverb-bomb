import { useEffect, useState } from 'react';
export function Timer(props) {
  const resetTimer = props.resetTimer;
  const setResetTimer = props.setResetTimer;
  const setDropBomb = props.setDropBomb;
  const seconds = props.seconds;
  const setSeconds = props.setSeconds;
  const func = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setSeconds(10);
        resolve();
      }, 3000);
    });
  }
  useEffect(() => {
    if (seconds == 0) {
      setDropBomb(true);
      func();
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
