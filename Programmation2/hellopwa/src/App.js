import React from 'react';
import logo from './logo.svg';
import BoutonInstallPWA from './components/BoutonInstallPWA';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <BoutonInstallPWA/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
