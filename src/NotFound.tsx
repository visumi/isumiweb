import React, { FC } from 'react';
import images from './utils/images';

const NotFound: FC = () => (
  <div className="md:flex md:flex-grow md:justify-between">
    <div className="md:mx-48 md:my-72 text-center px-4 py-12">
      <p className="font-serif font-black text-black lg:text-6xl text-4xl">Ops! Página não encontrada.</p>
    </div>
    <img className="md:w-1/3 md:mr-40 px-10" src={images.whale} alt="Imagem de uma Baleia" />
  </div>
);

export default NotFound;
