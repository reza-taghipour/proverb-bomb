import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { ProverbBox, Bomb, Timer, Points } from './components/index';
import { useState, useEffect } from 'react';
// import grass from './assets/images/grass.svg';
function App() {
  const points = useSelector((state) => state.points);
  const proverb = useSelector((state) => state.proverb);
  const dispatch = useDispatch();
  const [resetTimer, setResetTimer] = useState(false);
  const [dropBomb, setDropBomb] = useState(false);
  const [num, setNum] = useState(-1);
  const { addPoints, nextProverb } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="bg-gray-400 h-screen">
      <div className="flex justify-around items-start h-full">
        <div className="flex flex-col w-1/2 mt-12 ">
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
          <Timer
            nextProverb={nextProverb}
            num={num}
            resetTimer={resetTimer}
            setDropBomb={setDropBomb}
            setResetTimer={setResetTimer}
          />
          <Points points={points} />
        </div>
        <div className="relativ">
          <Bomb
            setDropBomb={setDropBomb}
            dropBomb={dropBomb}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
