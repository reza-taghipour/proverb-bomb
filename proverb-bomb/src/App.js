import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { ProverbBox, Bomb, Timer, Points } from './components/index';
import { useState, useEffect } from 'react';
function App() {
  const points = useSelector((state) => state.points);
  const proverb = useSelector((state) => state.proverb);
  const dispatch = useDispatch();
  const [resetTimer, setResetTimer] = useState(false);
  const [dropBomb, setDropBomb] = useState(false);
  const [num, setNum] = useState(-1);
  const [seconds, setSeconds] = useState(10);
  const { addPoints, nextProverb } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // useEffect(() => {
  //   if (num === 10) {
  //     alert('You win!');
  //   }
  // }, [proverb]);
  return (
    <div className="bg-gray-400 h-screen">
      <div className="flex flex-col h-full items-center justify-around">
        <div className="">
          <ProverbBox
            points={points}
            proverb={proverb}
            resetTimer={resetTimer}
            setResetTimer={setResetTimer}
            nextProverb={nextProverb}
            addPoints={addPoints}
            num={num}
            setNum={setNum}
          />
        </div>
        <div className="flex flex-col items-center">
          <h2>You'r score</h2>
          <Points points={points} />
        </div>
        <div className="flex flex-col items-center">
          <h2>remain time</h2>
          <Timer
            nextProverb={nextProverb}
            num={num}
            resetTimer={resetTimer}
            setDropBomb={setDropBomb}
            setResetTimer={setResetTimer}
            seconds={seconds}
            setSeconds={setSeconds}
          />
        </div>
        <div>
          <Bomb
            setDropBomb={setDropBomb}
            dropBomb={dropBomb}
            num={num}
            points={points}
            nextProverb={nextProverb}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
