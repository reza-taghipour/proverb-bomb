const timerReducer = (timer, action) => {
  switch (action.type) {
    case 'STARTTIMER':
      return 'start';
    case 'RESETTIMER':
      return 'reset';
    default:
      return 'defualt';
  }
};
export default timerReducer;
