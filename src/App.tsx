import React from 'react';
import './App.scss';
import images from './images';

function App() {
  return (
    <div className="App h-screen">
      <header className="App-header">
        <img src={images.logo} alt="logo-bg" className="absolute w-80 pt-10 pl-10"></img>
        <img src={images.header} alt="header-bg" className="static"></img>
      </header>
    </div>
  );
}

export default App;
