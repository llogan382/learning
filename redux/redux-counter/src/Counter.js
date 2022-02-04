import { useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
import {set, increment, decrement} from "./actions";
import { SetCounter } from "./SetCounter";
import { useActions } from "./use-actions";
import { useCounter } from "./use-counter";

export const Counter = () => {
  const incident = "Incident";
  const {count, increment, decrement, set} = useCounter();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => decrement}>Decrement</button>
      </section>

      <SetCounter />
    </main>
  );
};

export default Counter;
