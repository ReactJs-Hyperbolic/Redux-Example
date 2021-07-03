export const depositMoney = amount => {
  // Create an Action & Dispatch it (by returning another function)
  return dispatch => {
    dispatch({
      type: 'deposit',
      payload: amount,
    });
  };
};

export const withdrawMoney = amount => {
  return dispatch => {
    dispatch({
      type: 'withdraw',
      payload: amount,
    });
  };
};
