import React, { CSSProperties } from "react";
// import logo from './logo.svg';
import logo from "./yoga_me.png";
import "./App.css";

function App() {
  const mainTitleStyle: CSSProperties = {
    paddingTop: "50px",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={mainTitleStyle}>
          <code>
            Contradictions do not exist. Whenever you think you are facing a
            contradiction, check your premises. You will find that one of them
            is wrong.- Ayn Rand
          </code>
        </p>
        {/* <p>
          <code>
            Meanwhile, pls feel free to contact me on any of the following
            places
          </code>
        </p> */}
        <div>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/c/EmmanuelPonnudurai"
          >
            YouTube
          </a>
        </div>
        <div>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/emmanuelponnudurai/"
          >
            Instagram
          </a>
        </div>
        <div>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/emmanuel.ponnudurai/"
          >
            Facebook
          </a>
        </div>
        <div>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/emmanuelponnudurai"
          >
            LinkedIn
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
