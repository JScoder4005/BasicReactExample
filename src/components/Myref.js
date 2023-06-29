import React, { useRef, useEffect } from "react";

export default function Myref() {
  const myref = useRef();
  const myDiv = useRef();
  useEffect(() => {
    myref.current.focus();
  }, []);
  const handler = () => {
    let val = myref.current.value;
    let heightDiv = myDiv.current.offsetHeight;
    alert(val + "---" + heightDiv);
  };
  return (
    <div>
      {" "}
      UseRef Example Name: <input type="text" ref={myref} /> <br />
      <div ref={myDiv}>
        <h3> Learn Hooks </h3>
      </div>
      <button onClick={handler}> ClickHere </button>
    </div>
  );
}
