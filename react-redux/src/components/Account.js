import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmt, decrement , decrementByAmt} from "../actions";


function Account() {

  const amount = useSelector(state=>state.account.amount)
 const dispatch = useDispatch()
 const [value,setValue] = useState(0) ; 


  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Account Component</b>
          </h4>
          <h3>Amount:${amount}</h3>
          <button onClick={()=>dispatch(increment())}>Increment +</button>
          <button onClick={()=>dispatch(decrement())}>Decrement -</button>
          <input type='text' onChange={(e)=>setValue(+e.target.value)}></input>
          <button onClick={()=>dispatch(incrementByAmt(value))}>Increment By {value} +</button>
          <button onClick={()=>{
            if(amount>10)
            {
              dispatch(decrementByAmt(value))
            }
            else{
              alert("cant do -ve sub")
            }
           }}> Decrementby {value} </button>
        </div>
      </div>
  );
}

export default Account;
