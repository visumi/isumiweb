import React from 'react';
import images from './images';
import Header from './header';

function App() {
  return (
    <div className="min-h-screen antialiased bg-aqua-dark">
      <Header></Header>
      <img src={images.aboutBg} alt="Imagem de fundo"></img>
    </div>
  );
}

export default App;
