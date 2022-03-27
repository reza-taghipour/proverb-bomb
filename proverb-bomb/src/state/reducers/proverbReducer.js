import { proverbList } from './proverb';
const proverbReducer = (num, action) => {
  switch (action.type) {
    case 'NEXTPROVERB':
      return proverbList[action.payload];
    default:
      return ['x', 'please wait to start game !'];
  }
};
export default proverbReducer;
