import NextLevel from "./NextLevel";
import { useState, useEffect } from "react";

const Counter = (props) => {
  const changeCounter = () => {
    props.setCounter((pre) => pre - 5);
  };

  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   console.log("counterValue Changed -->");
  // }, [props.counterValue]);

  // useEffect(() => {
  //   console.log("show Changed -->");
  // }, [show]);

  // useEffect(() => {
  //   console.log("ANY CHANGE!!");
  // });

  // useEffect(() => {
  //   console.log("AT START--!!");
  // }, []);

  return (
    <>
      <div className="comp">
        <button onClick={() => setShow((pre) => !pre)}>TOGGLE</button>
        <h1>Counter</h1>
        <h2>{props.counterValue}</h2>
        <div>{props.text}</div>
        <button onClick={changeCounter}>DECREMENT</button>
        <button onClick={props.clickHandler}>INCREMENT</button>
        {show && (
          <NextLevel
            setCounter={props.setCounter}
            counterValue={props.counterValue}
            changeCounter={changeCounter}
          />
        )}
      </div>
    </>
  );
};

export default Counter;
