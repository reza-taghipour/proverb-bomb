export const addPoints = (points) => {
  return (dispatch) => {
    dispatch({
      type: 'ADDPOINTS',
      payload: points,
    });
  };
};
//check
export const nextProverb = (num) => {
  return (dispatch) => {
    dispatch({
      type: 'NEXTPROVERB',
      payload: num,
    });
  };
};
export const resetTimer = () => {
  return (dispatch) => {
    dispatch({
      type: 'RESETTIMER',
      // payload: null,
    });
  };
};
export const startTimer = () => {
  return (dispatch) => {
    dispatch({
      type: 'STARTTIMER',
      // payload: null,
    });
  };
};
