import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>Palette</h1>
        <div className="color">
          <div className="red" id="paint">red</div>
          <div className="orange" id="paint">orange</div>
          <div className="yellow" id="paint">yellow</div>
          <div className="lime" id="paint">lt green</div>
          <div className="green" id="paint">green</div>
          <div className="teal" id="paint">teal</div>
          <div className="blue" id="paint">blue</div>
          <div className="indigo" id="paint">indigo</div>
          <div className="violet" id="paint">violet</div>
          <div className="maroon" id="paint">maroon</div>
          <div className="brown" id="paint">brown</div>
          <div className="black" id="paint">black</div>
          <div className="white" id="paint">white</div>
        </div>

        <h1>Canvas</h1>
        <div className = "canvas"></div>

        <script src="js/app.js"></script>
      </div>
    );
  }
}

export default App;
