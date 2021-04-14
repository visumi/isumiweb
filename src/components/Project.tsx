import React, { FC } from 'react';

interface ProjectProps {
  title: string;
  desc: string;
  langs: {
    name: string;
    image: any;
  }[];
}

const Project: FC<ProjectProps> = ({ title, desc, langs }: ProjectProps) => (
  <div>
    <p className="font-serif font-bold text-black text-3xl mt-16 text-center select-none">
      {title}
    </p>
    <div className="flex flex-row my-6 space-x-6 justify-center">
      {
        langs.map((lang) => (
          <div key={lang.name}>
            <img src={lang.image} alt={`Logo ${lang.name}`} className="w-6 h-6 mx-auto" />
            <p className="font-serif font-bold text-black text-base text-center select-none">
              {lang.name}
            </p>
          </div>

        ))
      }
    </div>
    <p className="font-sans font-semibold text-gray-800 max-w-prose text-center mx-auto text-base">
      {desc}
    </p>
    <div className="flex flex-row mt-6 space-x-6 justify-center">
      <div className="bg-red-600 w-72 h-72" />
      <div className="bg-red-600 w-72 h-72" />
      <div className="bg-red-600 w-72 h-72" />
    </div>
  </div>
);

Project.defaultProps = {};

export default Project;
