const timerReducer = (type) => {
  switch (type) {
    case 'STARTTIMER':
      return true;
    case 'RESETTIMER':
      return false;
    default:
      return 't';
  }
};
export default timerReducer;
