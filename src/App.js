import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions';
// import { increment } from './actions/index'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div>
      Counter {counter}
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
