import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions/index.js";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable secret information</h3> : ""}
    </>
  );
}

export default App;
