import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//
export function ProverbBox(props) {
  const proverb = useSelector((state) => state.proverb);
  const points = props.points;
  const nextProverb = props.nextProverb;
  const addPoints = props.addPoints;
  const setResetTimer = props.setResetTimer;
  const num = props.num;
  const setNum = props.setNum;
  const [value, setValue] = useState();
  const handleSubmit = (num, points) => {
    if (value === proverb[0] || proverb[0] === 'x') {
      if (proverb[0] === 'x') {
        nextProverb(num);
      } else {
        setResetTimer(true);
        addPoints(points);
        nextProverb(num);
      }
    }
  };
  useEffect(() => {
    setNum(num + 1);
  }, [proverb]);
  return (
    <div className="flex flex-col justify-center">
      <FormatProverb proverb={proverb} setValue={setValue} />
      <button
        className={proverb[0] === 'x' ? 'hidden' : 'mt-8'}
        type="submit"
        onClick={() => handleSubmit(num, points)}
      >
        submit
      </button>
    </div>
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
    <div className="flex flex-wrap justify-center">
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
