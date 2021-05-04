import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface BoxProps {
  title: string,
  image: any,
  link: string,
}

const Box: FC<BoxProps> = ({ title, image, link }: BoxProps) => (
  <NavLink to={`/projetos/${link}`}>
    <div className="flex flex-col h-80 hover:transition duration-500 ease-in-out
    transform hover:scale-125"
    >
      <img src={image} alt="Imagem da Box" className="mt-20 w-20 h-20 self-center my-10" />
      <p className="font-serif font-bold text-black text-3xl mx-auto mb-2">
        {title}
      </p>
    </div>
  </NavLink>
);

Box.defaultProps = {};

export default Box;
