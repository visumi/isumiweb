import React, { FC } from 'react';
import { FiBook, FiBriefcase, FiCode, FiUser } from 'react-icons/fi';
import Card from './components/Card';

const geralData = [
  {
    subtitle: 'Localização',
    content: 'Atualmente estou morando em Campinas-SP',
  },
  {
    subtitle: 'Habilidades',
    content: 'Trabalho em grupo, vontade em liderar, dinâmico, artístico',
  },
  {
    subtitle: 'Hobby',
    content: 'Jogos de computador, gastronomia, cinema, geografia e aprender sobre novos temas',
  },
];

const formacaoData = [
  {
    subtitle: 'Universidade Estadual de Campinas',
    content: 'Análise e Desenvolvimento de Sistemas',
    time: '2017 - 2021',
  },
  {
    subtitle: 'FEEC - UNICAMP',
    content: 'Mestrado Incompleto na área de IoT',
    time: '2021',
  },
];

const carreiraData = [
  {
    subtitle: 'LaRCom FEEC UNICAMP - Estágio',
    content: 'Líder Técnico de um projeto envolvendo Netsuite da Oracle',
    time: '2020 - 2021',
  },
  {
    subtitle: 'Enforce BTG Pactual - Estágio',
    content: 'Trabalho com desenvolvimento de Sistemas Web utilizando Angular',
    time: '2020 - Hoje',
  },
];

const expData = [
  {
    subtitle: 'Linguagens',
    content: 'HTML, CSS, Javascript, Typescript, Node.js, React, Angular, Netsuite, C',
  },
  {
    subtitle: 'Idiomas',
    content: 'Inglês Avançado',
  },
];

const About: FC = () => (
  <div>
    <div className="my-40 flex justify-center space-x-12">
      <Card title="Geral" icon={FiUser} data={geralData} />
      <Card title="Formação" icon={FiBook} data={formacaoData} />
      <Card title="Carreira" icon={FiBriefcase} data={carreiraData} />
      <Card title="Experiências" icon={FiCode} data={expData} />
    </div>
  </div>
);

export default About;
