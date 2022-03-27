import bomb from '../assets/images/bomb.png';
import fire from '../assets/images/fire.png';
import { useEffect } from 'react';
export function Bomb(props) {
  const setDropBomb = props.setDropBomb;
  const dropBomb = props.dropBomb;
  const nextProverb = props.nextProverb;
  const points = props.points;
  const num = props.num;
  const waitting = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setDropBomb(false);
        if (num === 10) {
          alert(`finish \n your point is ${points} \n press ok to restart`);
          location.reload();
        } else {
          nextProverb(num);
        }
        resolve();
      }, 3000);
    });
  };
  useEffect(() => {
    if (dropBomb == true) {
      waitting();
    }
  }, [dropBomb]);
  return (
    <div className="">
      <img
        className={dropBomb ? 'hidden' : 'animate-bounce'}
        src={bomb}
        alt="bomb"
        width="150"
        height="150"
      />
      <img
        className={
          dropBomb
            ? 'animate-ping inline-flex h-full w-full rounded-full bg-red-400 opacity-75'
            : 'hidden'
        }
        src={fire}
        alt="bomb"
        width="600"
        height="600"
      />
    </div>
  );
}
//transition-all duration-1000 ease-out translate-y-full
