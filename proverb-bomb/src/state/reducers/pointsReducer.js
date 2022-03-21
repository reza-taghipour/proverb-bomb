const pointsReducer = (points = 0, action) => {
  switch (action.type) {
    case 'ADDPOINTS':
      return points + 10;
    case 'SUBTRACTPOINTS':
      return points - 10;
    default:
      return points;
  }
};
export default pointsReducer;
