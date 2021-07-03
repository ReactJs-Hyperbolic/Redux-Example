import { useState } from 'react';
import { useSelector } from 'react-redux';
import { depositMoney } from './state/action-creators';
import { withdrawMoney } from './state/action-creators';

function App() {
  const accountState = useSelector(state => state.account);
  const [inputVal, setInputVal] = useState(0);

  return (
    <div className='App'>
      <h1>King's Bank Account</h1>
      <p>{accountState}</p>
      <input
        type='text'
        placeholder='specify amt'
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
      />
      <button onClick={depositMoney(inputVal)}>Deposit</button>
      <button onClick={withdrawMoney(inputVal)}>Withdraw</button>
    </div>
  );
}

export default App;
