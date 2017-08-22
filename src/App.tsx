import * as React from 'react';
import MapComponent from './MapComponent';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to STAR</h2>
        </div>
        <p className="App-intro">
          This is a quick-starter for projects consist of:
        </p>
        <ul>
          <li>
            <strong>S</strong>ASS/SCSS,
          </li>
          <li>
            <strong>T</strong>ypeScript,
          </li>
          <li>
            <strong>A</strong>rcGIS API for JavaScript, and
          </li>
          <li>
            <strong>R</strong>eact
          </li>
        </ul>
        <hr />
        <MapComponent />
      </div>
    );
  }
}

export default App;
