import React, { FC } from 'react';
import images from './images';

const Home: FC = () => (
  <div>
    <div className="flex flex-grow justify-between">
      <div className="mx-48 my-56">
        <p className="font-serif font-black text-black antialiased text-6xl">Vinícius Isumi</p>
        <p className="font-serif font-bold text-gray-800 antialiased text-3xl my-2">Desenvolvedor Web</p>
        <p className="font-sans font-semibold text-gray-600 antialiased text-2xl max-w-md my-2">
          Formado em Análise de Sistemas pela UNICAMP, atualmente cursando Mestrado e trabalhando com Angular.
        </p>
        <div className="flex justify-center space-x-14 pt-4">
          <img
            className="w-6 hover:transition duration-150 ease-in-out
            transform hover:scale-125"
            src={images.ghb}
            alt="Logo do Github"
          />
          <img
            className="w-6 hover:transition duration-150 ease-in-out
            transform hover:scale-125"
            src={images.igb}
            alt="Logo do Instagram"
          />
          <img
            className="w-6 hover:transition duration-150 ease-in-out
            transform hover:scale-125"
            src={images.steamb}
            alt="Logo do Steam"
          />
        </div>
      </div>
      <div className="flex flex-grow mt-12 justify-center">
        <img className="w-8/12" src={images.aboutBg} alt="Imagem de fundo" />
      </div>
    </div>
  </div>
);
export default Home;
