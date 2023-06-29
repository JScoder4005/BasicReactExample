import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  const updateCount2 = () => {
    setCount(count - 1);
  };
  const updateCount3 = () => setCount(count * 2);
  return (
    <div>
      <h4> State Examole in function Component </h4>
      <p> The counter is {count} </p>
      <button onClick={updateCount}> Click here</button>
      <button onClick={updateCount2}> Click here</button>
      <button onDoubleClick={updateCount3}> Click here</button>
    </div>
  );
}
