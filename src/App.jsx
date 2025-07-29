import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addvalue = () => {
    if(count > 19){
      count = 20;
    }
    setCount(count + 1);
  };
  const removevalue = () => {
    if(count <= 0){
      count = 0;
    }
    setCount(count - 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>  Count is {count} </p>
        <button onClick={addvalue}>
          addvalue
        </button>
        <br /><br />
        <button onClick={removevalue}>
          removevalue
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
