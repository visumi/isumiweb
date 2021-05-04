import React, { FC } from 'react';
import { Transition } from '@headlessui/react';
import Box from './components/Box';
import images from './utils/images';

const Projects: FC = () => {
  const isShowing = true;

  return (
    <Transition
      appear
      show={isShowing}
      enter="transition ease-in-out duration-700 delay-100 transform"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="flex-col
    flex md:flex-row md:flex-grow md:my-40 justify-center md:space-x-44 mx-auto"
      >
        <Box title="Pancake BOT" image={images.discordColor} link="pancakebot" />
        <Box title="Barbershop" image={images.angularColor} link="barbershop" />
      </div>
    </Transition>
  );
};

export default Projects;
