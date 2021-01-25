import { useEffect } from "react";

const NextLevel = (props) => {
  useEffect(() => {
    console.log("NEXT LEVEL --->");
    return () => {
      console.log("COMPONENT is DESTROYED!!!!");
    };
  });

  return (
    <div className="comp">
      <h1>Next Level</h1>
      <h2>{props.counterValue}</h2>
      <button onClick={() => props.setCounter((pre) => pre + 10)}>INC</button>
      <button onClick={() => props.setCounter((pre) => pre - 10)}>DEC</button>
      <button onClick={props.changeCounter}>CHANGE</button>
    </div>
  );
};

export default NextLevel;
