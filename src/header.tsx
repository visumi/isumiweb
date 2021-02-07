import React, { FC } from 'react';

const Header: FC = () => (
  <div className="flex md:flex-row flex-col items-center py-10 pl-48 select-none">
    <div className="flex-grow">
      <h1 className="font-serif font-black text-4xl md:pb-0 pb-4">isumi</h1>
    </div>
    <div className="sm:block flex flex-col text-center -mx-8">
      <a
        className="font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:border-b-2 hover:border-black hover:transition duration-100 ease-in-out motion-safe"
        href="/"
      >
        Sobre
      </a>
      <a
        className="font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:border-b-2 hover:border-black hover:transition duration-100 ease-in-out motion-safe"
        href="/"
      >
        Projetos
      </a>
      <a
        className="font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:border-b-2 hover:border-black hover:transition duration-100 ease-in-out motion-safe"
        href="/"
      >
        Contato
      </a>
    </div>
    <div className="flex mx-20">
      diego
    </div>
  </div>
);

export default Header;
