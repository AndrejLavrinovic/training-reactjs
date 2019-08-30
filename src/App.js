import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {

    // Testing if babel is working on background and transpiles es6 / es7 javascript to es5
    const p = { a:1 } 
    const x = { ...p  }
    console.log(x)

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Andrej</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          <h4>Using webpack - bundle the application and necessary resources into a distribution folder.</h4>
          <ul>
            <li>Create src/index.html file as tamplate</li>
            <li>Update scripts in the package.json folder adding <b>"build": "webpack --path ./dist --output-filename init.js --content-base ./dist && cp src/index.html ./dist/"</b></li>
            <li>Run <b>npm run build</b> command and make sure that <b>dist</b> folder with <b>init.js</b> and <b>index.html</b> has been generated</li>
            <li>Run <b>npm run dev</b> command</li>
          </ul>
        </p>

        <p>
          <h4>Create separate npm scripts for development and production builds.</h4>
          <ul>
            <li>To be completed...</li>
          </ul>
        </p>

        <p>
          <h4>Use babel and associated plugins / dependencies to transpile es6 / es7 javascript to es5</h4>
          <ul>
            <li>To be completed...</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
