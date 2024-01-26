import "./App.css";

import { Button } from "antd";
import { useState } from "react";
import styled from "styled-components";

import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <EstriolDiv isBlue={count === 4} className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TomatoButton>Button Styled</TomatoButton>
    </EstriolDiv>
  );
}

interface PsDiv {
  isBlue?: boolean;
}

const EstriolDiv = styled.div<PsDiv>`
  color: ${(props) => (props.isBlue ? "blue" : "pink")};
`;

const TomatoButton = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 20px;
`;

export default App;
