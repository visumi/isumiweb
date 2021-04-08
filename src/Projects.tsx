import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Projects: FC = () => (
  <div className="flex flex-grow my-56 justify-center flex-col space-y-20">
    <NavLink
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
    </p>
  </div>
);

export default Projects;
