import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleDecrement() {
    setCount((count) => count - 1);
  }

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button
          disabled={count >= 10 && true}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <button
          onClick={handleDecrement}
          disabled={count <= 0 && true}
          style={{ marginLeft: 10 }}
        >
          Decrement button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <input
          style={{ borderRadius: 10, height: 10, padding: 10, border: "none" }}
          type="text"
          onChange={handleChange}
        />
        <p>{text}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
