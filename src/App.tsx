import React from 'react';
import Header from './Header';
import images from './images';

const App = () => (
  <div className="font-sans antialiased">
    <Header />
    <img src={images.aboutBg} alt="Imagem de fundo" />
  </div>
);

export default App;
