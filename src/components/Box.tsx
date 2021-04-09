import React, { FC } from 'react';

interface BoxProps {
  title: string,
  image: any,
}

const Box: FC<BoxProps> = ({ title, image }: BoxProps) => (
  <div className="w-80 flex flex-col items-end h-80 hover:border-black
   hover:border-b-4 border-black"
  >
    <img src={image} alt="Imagem da Box" className="w-28 h-28 self-center my-auto" />
    <p className="font-serif font-bold text-black text-3xl mx-auto mb-2">
      {title}
    </p>
  </div>
);

Box.defaultProps = {};

export default Box;
