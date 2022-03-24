import bomb from '../assets/images/bomb.png';
export function Bomb(props) {
  console.log(props);
  const setDropBomb = props.setDropBomb;
  const dropBomb = props.dropBomb;
  return (
    <div className={ dropBomb ? "absolute transition-all duration-1000 ease-out translate-x-full" : ""} >
    <img src={bomb} alt="bomb" width="150" height="150" />
    </div>
  );
}
//transition-all duration-1000 ease-out translate-y-full
