import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface BoxProps {
  title: string,
  image: any,
  link: string,
}

const Box: FC<BoxProps> = ({ title, image, link }: BoxProps) => (
  <NavLink to={`/projetos/${link}`}>
    <div className="w-80 flex flex-col items-end h-80 over:transition duration-500 ease-in-out
    transform hover:scale-125"
    >
      <img src={image} alt="Imagem da Box" className="w-20 h-20 self-center my-auto" />
      <p className="font-serif font-bold text-black text-3xl mx-auto mb-2">
        {title}
      </p>
    </div>
  </NavLink>
);

Box.defaultProps = {};

export default Box;
