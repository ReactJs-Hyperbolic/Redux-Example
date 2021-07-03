import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './state/index.js';
import { bindActionCreators } from 'redux';

function App() {
  const accountState = useSelector(state => state.account);
  const dispatch = useDispatch(actionCreators);
  // Bind action creators and give them the dispatch
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [inputVal, setInputVal] = useState();

  return (
    <div className='App'>
      <h1>King's Bank Account</h1>
      <p>{accountState}</p>
      <input
        type='number'
        placeholder='specify amt'
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
      />
      <button onClick={() => depositMoney(inputVal)}>Deposit</button>
      <button onClick={() => withdrawMoney(inputVal)}>Withdraw</button>
    </div>
  );
}

export default App;
