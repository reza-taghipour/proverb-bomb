import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
//
export function ProverbBox(props) {
  const proverb = useSelector((state) => state.proverb);
  const points = props.points;
  const nextProverb = props.nextProverb;
  const addPoints = props.addPoints;
  const startTimer = props.startTimer;
  const resetTimer = props.resetTimer;
  const [num, setNum] = useState(-1);
  const [value, setValue] = useState();
  // const [add, setAdd] = useState(false);
  const handleSubmit = (num, points) => {
    console.log(num);
    if (value === proverb[0] || proverb[0] === 'x') {
      if (proverb[0] === 'x') {
        // startTimer();
        nextProverb(num);
      } else {
        addPoints(points);
        nextProverb(num);
        startTimer();
        console.log(value);
      }
    }
  };
  useEffect(() => {
    setNum(num + 1);
    // startTimer();
  }, [proverb]);
  return (
    <>
      <FormatProverb proverb={proverb} setValue={setValue} />
      <button type="submit" onClick={() => handleSubmit(num, points)}>
        submit
      </button>
    </>
  );
}
const FormatProverb = (props) => {
  const proverb = props.proverb;
  const setValue = props.setValue;
  let answer = proverb[0];
  let sentence = proverb[1];
  const splited = sentence.split(' ');
  const finalSentence = [];
  for (let i = 0; i < splited.length; i++) {
    if (splited[i] === answer) {
      splited[i] = (
        <input
          name="provbox"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          className="appearance-none w-full block text-gray-700 border
          border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
          focus:bg-white focus:border-gray-500"
        />
      );
    }
    finalSentence.push(splited[i]);
  }
  return (
    <div className="flex w-full">
      {finalSentence.map((word, index) => {
        return (
          <div key={index} className="flex m-1 items-center">
            {word}
          </div>
        );
      })}
    </div>
  );
};
