import React, { CSSProperties } from 'react';
// import logo from './logo.svg';
import logo from './yoga_me.png';
import './App.css';

function App() {
  const mainTitleStyle: CSSProperties = {
    paddingTop: '80px'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={mainTitleStyle}>
          <code>I'm re-building my site. Until that time, lets watch my rotating picture (yes, its in react :D)</code>
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>
          <a className="App-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/EmmanuelPonnudurai">YouTube</a>
        </div>
        <div>
          <a className="App-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/emmanuelponnudurai/">Instagram</a>
        </div>
        <div>
          <a className="App-link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/emmanuel.ponnudurai/">Facebook</a>
        </div>
        <div>
          <a className="App-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/emmanuelponnudurai">LinkedIn</a>
        </div>
      </header>

    </div>
  );
}

export default App;
