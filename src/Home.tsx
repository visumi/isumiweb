import React, { FC } from 'react';
import { FiAtSign, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { Transition } from '@headlessui/react';
import images from './utils/images';

const Home: FC = () => {
  const isShowing = true;

  return (
    <Transition
      appear
      show={isShowing}
    >
      <div>
        <div className="flex flex-grow justify-between">
          <Transition.Child
            enter="transition ease-in-out duration-700 delay-100 transform"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="px-4 text-center pt-10
          md:pt-0 md:px-0 lg:text-left md:mx-48 md:my-8 lg:px-0 xl:my-56 lg:ml-72 xl:ml-48"
            >
              <p className="font-serif font-black text-black text-6xl">Vinícius Isumi</p>
              <p className="font-serif font-bold text-gray-800 text-3xl my-2 select-none">Desenvolvedor Web</p>
              <p className="font-sans font-semibold text-gray-600 text-2xl max-w-md my-2 select-none">
                Formado em Análise de Sistemas pela UNICAMP, atualmente cursando Mestrado e trabalhando com Angular.
              </p>
              <div className="flex justify-center space-x-14 pt-4 text-3xl">
                <a href="mailto: vinicius.isumi@gmail.com">
                  <FiAtSign className="hover:transition duration-150 ease-in-out
              transform hover:scale-125 hover:text-aqua-dark"
                  />
                </a>
                <a href="https://github.com/visumi" rel="noreferrer" target="_blank">
                  <FiGithub className="hover:transition duration-150 ease-in-out
              transform hover:scale-125"
                  />
                </a>
                <a href="https://www.instagram.com/isumihm/" rel="noreferrer" target="_blank">
                  <FiInstagram className="hover:transition duration-150 ease-in-out
              transform hover:scale-125 hover:text-[#C1558B]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/vinicius-isumi-9b5831197/" rel="noreferrer" target="_blank">
                  <FiLinkedin className="hover:transition duration-150 ease-in-out
              transform hover:scale-125 hover:text-[#006699]"
                  />
                </a>
              </div>
            </div>
          </Transition.Child>
          <Transition.Child
            enter="transition ease-in-out duration-1000 delay-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="xl:flex flex-grow mt-10 xl:justify-center xl:mr-10 hidden">
              <img className="w-8/12" src={images.homeBg} alt="Imagem de fundo" />
            </div>
          </Transition.Child>
        </div>
        <Transition.Child
          enter="transition ease-in-out duration-1000 delay-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="md:flex flex-grow md:justify-center hidden xl:hidden lg:pt-6 xl:pt-0">
            <img className="w-3/12" src={images.homeBg} alt="Imagem de fundo" />
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default Home;
