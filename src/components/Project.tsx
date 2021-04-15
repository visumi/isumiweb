import React, { FC } from 'react';

interface ProjectProps {
  title: string;
  desc: string;
  image: any;
  imageMobile: any;
  langs: {
    name: string;
    image: any;
  }[];
}

const Project: FC<ProjectProps> = ({ title, desc, image, imageMobile, langs }: ProjectProps) => (
  <div className="pt-10">
    <div className="flex flex-row space-x-6 justify-center">
      {
          langs.map((lang) => (
            <div key={lang.name}>
              <img src={lang.image} alt={`Logo ${lang.name}`} className="w-8 h-8 mx-auto" />
              <p className="font-serif font-bold text-black text-lg text-center select-none">
                {lang.name}
              </p>
            </div>
          ))
        }
    </div>
    <p className="font-serif font-bold text-black text-4xl pb-4 pt-2 text-center select-none">
      {title}
    </p>
    <p className="font-sans font-semibold text-gray-800 max-w-prose text-center mx-auto text-base px-6">
      {desc}
    </p>
    <div className="mt-6 justify-center">
      <div className="w-8/12 mx-auto h-64 hidden
      sm:block
      lg:w-5/12"
      >
        <img src={image} alt={`Imagens do Projeto ${title}`} className="w-full" />
      </div>
      <div className="md:hidden">
        <img src={imageMobile} alt={`Imagens do Projeto ${title}`} className="w-full" />
      </div>
    </div>
  </div>
);

Project.defaultProps = {};

export default Project;
