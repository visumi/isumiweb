import React from 'react';
import Header from './Header';
import images from './images';

const App = () => (
  <div className="font-sans antialiased bg-primary">
    <Header />
    <div className="flex flex-grow justify-between">
      <div className="mx-48 my-56">
        <p className="font-serif font-black text-black antialiased text-6xl">Vinícius Isumi</p>
        <p className="font-serif font-bold text-gray-800 antialiased text-3xl my-2">Desenvolvedor Web</p>
        <p className="font-sans font-semibold text-gray-600 antialiased text-2xl">
          Formado em Análise de Sistemas pela UNICAMP, atualmente cursando Mestrado e trabalhando com Angular.
        </p>
      </div>
      <img className="my-12 mx-24" src={images.aboutBg} alt="Imagem de fundo" />
    </div>
  </div>
);

export default App;
