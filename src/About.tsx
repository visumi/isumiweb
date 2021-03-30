import React, { FC } from 'react';
import { FiBook, FiBriefcase, FiCode } from 'react-icons/fi';

const About: FC = () => (
  <div>
    <div className="my-40 flex justify-center space-x-48">
      <div>
        <FiBook className="text-6xl text-red-800 mx-auto" />
        <p className="font-serif font-bold text-black text-3xl mt-2 mb-6 text-center">Formação</p>
        <p className="font-sans font-semibold text-black text-xl max-w-md text-center">
          2017 - 2021
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-md text-center">
          Universidade Estadual de Campinas
        </p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-md text-center">
          Análise e Desenvolvimento de Sistemas
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-md text-center mt-6">
          2021 - Hoje
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-md text-center">
          Universidade Estadual de Campinas
        </p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-md text-center">
          Mestrado pela FEEC
        </p>
      </div>
      <div>
        <FiBriefcase className="text-6xl text-indigo-900 mx-auto" />
        <p className="font-serif font-bold text-black text-3xl mt-2 mb-6 text-center">Carreira</p>
        <p className="font-sans font-semibold text-black text-xl max-w-md text-center">
          2020-2021
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-md text-center">
          LaRCom FEEC UNICAMP
        </p>
        <p className="font-sans font-semibold text-gray-500 text-lg max-w-md text-center">
          Líder técnico de um projeto envolvendo Netsuite da Oracle, onde fui pioneiro no desenvolvimento e
          posteriormente coordenei novos estagiários para seguirem com os trabalhos.
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-md text-center mt-6">
          2020-Hoje
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-md text-center">
          Enforce BTG Pactual
        </p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-md text-center">
          Trabalho com desenvolvimento de Sistemas Web utilizando Angular
        </p>
      </div>
      <div>
        <FiCode className="text-6xl text-green-700 mx-auto" />
        <p className="font-serif font-bold text-black text-3xl mt-2 mb-6 text-center">Conhecimentos</p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-md text-center">
          HTML
          <br />
          CSS
          <br />
          Javascript
          <br />
          Typescript
          <br />
          Node.js
          <br />
          React
          <br />
          Angular
          <br />
          Netsuite
        </p>
      </div>
    </div>
  </div>
);

export default About;
