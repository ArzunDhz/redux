
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { useSelector } from 'react-redux';

function App({store}) {

  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)

  return (
    <div className="App">
      <h4>App</h4>
       <h3>CurrentAmount: {amount}</h3>
      <h3>Total Bonus :{points}</h3>
<Account></Account>
<Bonus store={store} ></Bonus>
asdasdasd
<canvas></canvas>
    </div>
  );
}

export default App;
