import React, { FC } from 'react';
import Project from '../components/Project';
import langs from '../utils/langs';
import images from '../utils/images';

const langsData = [langs.nodejs];
const desc = 'Nesse projeto pessoal decidi explorar a biblioteca Discord.js, que possibilita '
+ 'interagir de maneira muito fácil com a API do Discord, uma plataforma de comunicações. '
+ 'Desenvolvi uma integração utlizando a API da Riot Games que permite coletar informações sobre o jogo '
+ 'League of Legends e exibir no chat do Discord. Trabalhei também com a API do Youtube e bibliotecas próprias para '
+ 'reproduzir músicas solicitadas pelos usuários. No geral gosto de usar esse projeto para trabalhar com bibliotecas '
+ 'que sempre tive curiosidade, além de criar funções legais para os servidores que frequento no Discord. ';

const PancakeBot: FC = () => (
  <Project
    title="Pancake BOT"
    langs={langsData}
    desc={desc}
    image={images.pbot}
    imageMobile={images.pbotmob}
  />
);

export default PancakeBot;
