
import { increment } from "../slices/bonusSlice";
import { useDispatch, useSelector } from "react-redux";

function Bonus() {
  
const points = useSelector(state=>state.bonus.points)
const dispatch  = useDispatch()
image.png
  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Bonus Component</b>
          </h4>
          <h3>Total point : {points}</h3>
          
          <button onClick={()=>dispatch(increment())}>Increment +</button>
        </div>
      </div>
  );
}

export default Bonus;
