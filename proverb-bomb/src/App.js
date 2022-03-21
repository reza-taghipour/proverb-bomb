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
  // const [resetTimer, setResetTimer] = useState(false);
  const { addPoints, nextProverb, startTimer, resetTimer } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="bg-gray-400 h-screen">
      <div className="flex justify-around items-start">
        <div className="flex flex-col w-1/2 mt-12 ">
          <ProverbBox
            points={points}
            proverb={proverb}
            startTimer={startTimer}
            resetTimer={resetTimer}
            nextProverb={nextProverb}
            addPoints={addPoints}
          />
          <Timer
            resetTimer={resetTimer}
            className="items-center"
          />
          <Points points={points} />
        </div>
        <div>
          <Bomb />
        </div>
      </div>
    </div>
  );
}
export default App;
