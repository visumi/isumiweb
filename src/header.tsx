import React, { FC } from 'react';

const Header: FC = () => (
  <div className="flex lg:flex-row flex-col items-center py-10 pl-48 select-none">
    <div className="flex-grow">
      <h1 className="font-serif font-black text-4xl md:pb-0 pb-4">isumi</h1>
    </div>
    <div className="sm:block flex flex-col text-center -mx-8">
      <a
        className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:transition duration-150 ease-in-out
        transform hover:scale-125"
        href="/"
      >
        Sobre
      </a>
      <a
        className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:transition duration-150 ease-in-out
        transform hover:scale-125"
        href="/"
      >
        Projetos
      </a>
      <a
        className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:transition duration-150 ease-in-out motion-safe
        transform hover:scale-125"
        href="/"
      >
        Contato
      </a>
    </div>
    <div className="flex px-20">
      diego
    </div>
  </div>
);

export default Header;
