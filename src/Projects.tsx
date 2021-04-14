import React, { FC } from 'react';
import Box from './components/Box';
import images from './utils/images';

const Projects: FC = () => (
  <div className="flex flex-grow my-40 justify-center space-x-20 mx-auto">
    <Box title="Discord.js" image={images.discord} link="discordjs" />
    <Box title="Barbershop" image={images.angular} link="barbershop" />
    <Box title="WIP" image={images.maintenance} link="projetos" />
  </div>
);

export default Projects;