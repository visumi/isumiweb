import React, { FC } from 'react';

const Header: FC = () => (
  <div className="flex md:flex-row flex-col items-center py-10 px-48">
    <div className="flex-grow">
      <h1 className="font-serif font-black text-4xl md:pb-0 pb-4">isumi</h1>
    </div>
    <div className="sm:block flex flex-col text-center">
      <a className="font-display text-2xl mx-16 sm:py-0 py-1 px-4" href="google.com">Sobre</a>
      <a className="font-display text-2xl mx-16 sm:py-0 py-1 px-4" href="gmail.com">Projetos</a>
      <a className="font-display text-2xl mx-16 sm:py-0 py-1 px-4" href="youtube.com">Contato</a>
    </div>
  </div>
);

export default Header;
