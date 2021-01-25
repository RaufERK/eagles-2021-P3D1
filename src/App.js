import Counter from "./components/Counter";
import { useState, useEffect } from 'react'
import FetchAndEffect from "./components/FetchAndEffect";

const loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus exercitationem accusantium, quos voluptate blanditiis dicta excepturi cupiditate ratione, ab sint obcaecati libero eligendi quis ut enim, commodi esse soluta.'

function App() {
  const [counter, setCounter] = useState(100);

  const clickHandler = (event) => {
    setCounter(pre => pre + 5)
  }

  const myComp = <FetchAndEffect />

  return (
    <div className='comp'>
      <h1>App</h1>
      <h1>{counter}</h1>
      <button onClick={clickHandler}>INCREMENT</button>
      {/* <Counter
        counterValue={counter}
        text={loremText}
        setCounter={setCounter}
        clickHandler={clickHandler}
      /> */}
      { myComp}
    </div >
  );
}

export default App;
