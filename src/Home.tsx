import React, { FC } from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import images from './images';

const Home: FC = () => (
  <div>
    <div className="flex flex-grow justify-between">
      <div className="mx-48 my-56">
        <p className="font-serif font-black text-black text-6xl">Vinícius Isumi</p>
        <p className="font-serif font-bold text-gray-800 text-3xl my-2">Desenvolvedor Web</p>
        <p className="font-sans font-semibold text-gray-600 text-2xl max-w-md my-2">
          Formado em Análise de Sistemas pela UNICAMP, atualmente cursando Mestrado e trabalhando com Angular.
        </p>
        <div className="flex justify-center space-x-14 pt-4 text-3xl">
          <FiGithub className="hover:transition duration-150 ease-in-out
            transform hover:scale-125"
          />
          <FiInstagram className="hover:transition duration-150 ease-in-out
            transform hover:scale-125 hover:text-[#C1558B]"
          />
          <FiLinkedin className="hover:transition duration-150 ease-in-out
            transform hover:scale-125 hover:text-[#006699]"
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
