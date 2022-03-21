//this one is necessary if we have multiple reducers
import { combineReducers } from 'redux';
import pointsReducer from './pointsReducer';
import proverbReducer from './proverbReducer';
import timerReducer from './timerReducer';
//as key value we call the reducer and the key is the name of the reducer
const reducers = combineReducers({
  points: pointsReducer,
  proverb: proverbReducer,
  timer: timerReducer,
});
export default reducers;
