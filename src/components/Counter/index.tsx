import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = (number: number = 1): void => {
    setCounter(counter + number);
  };
  return (
    <div className="mt-5">
      <h3>Counter: useState</h3>
      <span>Valor: {counter}</span>
      <br />
      <button
        onClick={() => increment()}
        className="outline-1 mt-2 bg-white text-black rounded-lg p-2"
      >
        +1
      </button>
      <button
        onClick={() => setCounter(0)}
        className="outline-1 mt-2 bg-red-700 text-white rounded-lg p-2"
      >
        Reset
      </button>
    </div>
  );
};
