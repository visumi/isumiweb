import React, { FC } from 'react';
import { FiBook, FiBriefcase, FiCode, FiUser } from 'react-icons/fi';
import { Transition } from '@headlessui/react';
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
    content:
      'Jogos de computador, gastronomia, cinema, geografia e aprender sobre novos temas',
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
    subtitle: 'Enforce BTG Pactual - Júnior',
    content: 'Trabalho com desenvolvimento de Sistemas Web utilizando Angular',
    time: '2020 - 2021',
  },
  {
    subtitle: 'Banco Original - Pleno',
    content: 'Atuo no desenvolvimento e manutenção dos Canais Internos, trabalho com Java e Angular',
    time: '2022 - Hoje',
  },
];

const expData = [
  {
    subtitle: 'Linguagens',
    content:
      'HTML, CSS, Javascript, Typescript, Node.js, React, Angular, Netsuite, C, Java',
  },
  {
    subtitle: 'Idiomas',
    content: 'Inglês Avançado',
  },
];

const About: FC = () => {
  const isShowing = true;

  return (
    <Transition
      appear
      show={isShowing}
      enter="transition ease-in-out duration-700 delay-100 transform"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div>
        <div
          className="space-y-12 mb-8 px-4
      md:my-4 md:flex md:justify-center md:space-x-4 md:px-8 md:space-y-0 xl:my-32 lg:space-x-10"
        >
          <Card title="Geral" icon={FiUser} data={geralData} />
          <div className="border-t-2 border-black " />
          <Card title="Formação" icon={FiBook} data={formacaoData} />
          <div className="border-t-2 border-black" />
          <Card title="Carreira" icon={FiBriefcase} data={carreiraData} />
          <div className="border-t-2 border-black" />
          <Card title="Experiências" icon={FiCode} data={expData} />
        </div>
      </div>
    </Transition>
  );
};

export default About;
