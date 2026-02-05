import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(null);
  const min_val = -10;
  const max_val = 10;
  const incriment = () => {
    if (count<max_val) {
      setCount(count + 1);
    }
  };
  const decriment = () => {
    if (count>min_val) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 h-96 m-20 rounded-2xl">
      <h1 className="text-2xl font-semibold font-serif">Counter {count}</h1>
      <div className="flex justify-center items-center gap-4 my-10">
        <button
          onClick={ incriment}
          className="bg-green-700 px-10 py-3 rounded-lg text-16 text-white"
        >
          Incriment
        </button>
        <button

          onClick={ decriment}
          className="bg-red-700 px-10 py-3 rounded-lg text-16 text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-yellow-700 px-10 py-3 rounded-lg text-16 text-white"
        >
          Resate
        </button>
      </div>
    </div>
  );
}

export default Counter;
