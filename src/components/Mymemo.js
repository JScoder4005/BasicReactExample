import React, { useState } from "react";

export default function Mymemo() {
  const [count, setCount] = useState(0);
  const [evenNum, setEvenNum] = useState(2);
  function evenNumDouble() {
    console.log("double");
    return evenNum * 2;
  }

  return (
    <div>
      <h2>Use Memo example</h2>
      <p>Counter: {count}</p>
      <p>Even Number: {evenNum}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setEvenNum(evenNum + 2)}>Even Number</button>
    </div>
  );
}
