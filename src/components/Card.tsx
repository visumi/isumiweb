import React, { FC } from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  icon: IconType;
  data: {
    subtitle: string;
    content: string;
    time?: string;
  }[];
}

const Card: FC<CardProps> = ({ title, icon, data }: CardProps) => {
  const Icon = icon;

  return (
    <div>
      <Icon className="text-6xl text-black mx-auto" />
      <p className="font-serif font-bold text-black text-3xl mt-2 mb-6 text-center select-none">
        {title}
      </p>
      {data.map((d) => (
        <div key={d.subtitle} className="mt-6">
          <p className="font-sans font-semibold text-black text-xl text-center">
            {d.time}
          </p>
          <p className="font-sans font-semibold text-black text-xl text-center">
            {d.subtitle}
          </p>
          <p className="font-sans font-semibold text-gray-500 text-xl max-w-sm text-center">
            {d.content}
          </p>
        </div>
      ))}
    </div>
  );
};

Card.defaultProps = {};

export default Card;
