import React, { FC } from 'react';
import Box from './components/Box';
import images from './utils/images';

const Projects: FC = () => (
  <div className="flex-col
  flex md:flex-row md:flex-grow md:my-48 justify-center md:space-x-44 mx-auto"
  >
    <Box title="Pancake BOT" image={images.discordColor} link="pancakebot" />
    <Box title="Barbershop" image={images.angularColor} link="barbershop" />
  </div>
);

export default Projects;
