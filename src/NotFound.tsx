import React, { FC } from 'react';
import images from './utils/images';

const NotFound: FC = () => (
  <div className="flex flex-grow justify-between">
    <div className="mx-48 my-72">
      <p className="font-serif font-black text-black text-6xl">Ops! Página não encontrada.</p>
    </div>
    <img className="w-1/3 mr-40" src={images.whale} alt="Imagem de uma Baleia" />
  </div>
);

export default NotFound;
