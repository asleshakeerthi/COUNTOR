
import React, { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="container">
      <h1 className="count">{state.count}</h1>
      <div className="button-group">
        <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default App;
