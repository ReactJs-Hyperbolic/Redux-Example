// define the reducers in here
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'deposit':
      return parseInt(state) + parseInt(action.payload);
    case 'withdraw':
      return parseInt(state) - parseInt(action.payload);
    default:
      return state;
  }
};

export default reducer;
