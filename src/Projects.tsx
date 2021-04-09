import React, { FC } from 'react';
import Box from './components/Box';
import images from './images';

const Projects: FC = () => (
  <div className="flex flex-grow my-40 justify-center space-x-20 mx-auto">
    <Box title="Discord.js" image={images.aboutBg} />
    <Box title="Barbershop" image={images.aboutBg} />
    <Box title="WIP" image={images.aboutBg} />
    {/* <NavLink
      className="font-serif font-bold text-black text-3xl mx-auto hover:transition duration-500 ease-in-out
      transform hover:scale-150"
      to="/projetos/discordjs"
    >
      Discord.js
    </NavLink>
    <NavLink
      className="font-serif font-bold text-black text-3xl mx-auto hover:transition duration-500 ease-in-out
      transform hover:scale-150"
      to="/projetos/barbershop"
    >
      Barbershop
    </NavLink>
    <p
      className="font-serif font-bold text-black text-3xl mx-auto hover:transition duration-500 ease-in-out
      transform hover:scale-150"
    >
      WIP
    </p> */}
  </div>
);

export default Projects;
