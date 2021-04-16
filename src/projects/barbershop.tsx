import React, { FC } from 'react';
import Project from '../components/Project';
import langs from '../utils/langs';
import images from '../utils/images';

const langsData = [langs.angular, langs.html5];
const desc = 'Em uma das disciplinas da Faculdade fiquei responsável por desenvolver todo o front-end de um projeto '
+ 'de um gerenciador de uma barbearia. Foi minha primeira experiência com Angular onde tive a oportunidade de '
+ 'criar serviços, autenticadores, componentes e praticar minhas técnicas recém aprendidas durante o estágio. Outra  '
+ 'parte do grupo ficou responsável pelo back-end, houve um excelente trabalho em grupo para entendermos as  '
+ 'necessidades do sistema. O projeto contém funções de cadastro em geral, permissões e gerenciamento para gerentes, '
+ 'além de um sistema de reservas e venda integrado. ';

const Barbershop: FC = () => (
  <Project
    title="Barbershop"
    langs={langsData}
    desc={desc}
    image={images.barber}
    imageMobile={images.barbermob}
  />
);

export default Barbershop;
