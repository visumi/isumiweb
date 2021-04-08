import React, { FC } from 'react';
import { FiBook, FiBriefcase, FiCode, FiUser } from 'react-icons/fi';

const About: FC = () => (
  <div>
    <div className="my-40 flex justify-center space-x-12">
      <div>
        <FiUser className="text-6xl text-black mx-auto" />
        <p className="font-serif font-bold text-black text-3xl mt-2 mb-6 text-center select-none">Geral</p>
        <p className="font-sans font-semibold text-black text-xl text-center mt-6">Localização</p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-sm text-center">
          Atualmente estou morando em Campinas-SP
        </p>
        <p className="font-sans font-semibold text-black text-xl text-center mt-6">Habilidades</p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-sm text-center">
          Trabalho em grupo, vontade em liderar, dinâmico, artístico
        </p>
        <p className="font-sans font-semibold text-black text-xl text-center mt-6">Hobby</p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-sm text-center">
          Jogos de computador, gastronomia, cinema, geografia e aprender sobre novos temas
        </p>
      </div>
      <div>
        <FiBook className="text-6xl text-black mx-auto" />
        <p className="font-serif font-bold text-black text-3xl mt-2 mb-6 text-center select-none">Formação</p>
        <p className="font-sans font-semibold text-black text-xl text-center">
          2017 - 2021
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-sm text-center">
          Universidade Estadual de Campinas
        </p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-sm text-center">
          Análise e Desenvolvimento de Sistemas
        </p>
        <p className="font-sans font-semibold text-black text-xl text-center mt-6">
          2021 - Hoje
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-sm text-center">
          Universidade Estadual de Campinas
        </p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-sm text-center">
          Mestrado pela FEEC
        </p>
      </div>
      <div>
        <FiBriefcase className="text-6xl text-black mx-auto" />
        <p className="font-serif font-bold text-black text-3xl mt-2 mb-6 text-center select-none">Carreira</p>
        <p className="font-sans font-semibold text-black text-xl text-center">
          2020-2021
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-sm text-center">
          LaRCom FEEC UNICAMP - Estágio
        </p>
        <p className="font-sans font-semibold text-gray-500 text-lg max-w-sm text-center">
          Líder Técnico de um projeto envolvendo Netsuite da Oracle
        </p>
        <p className="font-sans font-semibold text-black text-xl text-center mt-6">
          2020-Hoje
        </p>
        <p className="font-sans font-semibold text-black text-xl max-w-sm text-center">
          Enforce BTG Pactual - Estágio
        </p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-sm text-center">
          Trabalho com desenvolvimento de Sistemas Web utilizando Angular
        </p>
      </div>
      <div>
        <FiCode className="text-6xl text-black mx-auto" />
        <p className="font-serif font-bold text-black text-3xl mt-2 mb-6 text-center select-none">Experiências</p>
        <p className="font-sans font-semibold text-black text-xl max-w-sm text-center">Linguagens</p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-sm text-center">
          HTML, CSS, Javascript, Typescript, Node.js, React, Angular, Netsuite
        </p>
        <p className="font-sans font-semibold text-black text-xl text-center mt-6">Idiomas</p>
        <p className="font-sans font-semibold text-gray-500 text-xl max-w-sm text-center">
          Inglês Avançado
        </p>
      </div>
    </div>
  </div>
);

export default About;
