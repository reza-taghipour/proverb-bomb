import { useTimer } from 'react-timer-hook';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
export function Timer({ expiryTimestamp }, props) {
  const timer = useSelector((state) => state.timer);
  const resetTimer = props.resetTimer;
  console.log(timer);
  const {
    seconds,
    minutes,
    // hours,
    // days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
    // resetTimer(),
  });
  useEffect(() => {
    if (timer) {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 10);
      restart(time);
    }
  }, [timer]);
  return (
    <div className="items-center">
      <div className="font-8">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
      <button
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 10);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
}
