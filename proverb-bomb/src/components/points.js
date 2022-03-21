import { useSelector, useDispatch } from 'react-redux';
export function Points(props) {
  const points = props.points;
  return <h1>{points}</h1>;
}
