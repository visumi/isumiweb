import React, { FC } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

interface ProjectProps {
  title: string;
  desc: string;
  image: any;
  image2: any;
  image3: any;
  langs: {
    name: string;
    image: any;
  }[];
}

const Project: FC<ProjectProps> = ({ title, desc, image, image2, image3, langs }: ProjectProps) => (
  <div>
    <div className="flex ml-48">
      <NavLink to="/projetos">
        <FiChevronLeft className="text-3xl hover:transition duration-150 ease-in-out
              transform hover:scale-125"
        />
      </NavLink>
    </div>
    <p className="font-serif font-bold text-black text-3xl mt-6 text-center select-none">
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
    <p id="banana" className="font-sans font-semibold text-gray-800 max-w-prose text-center mx-auto text-base">
      {desc}
    </p>
    <div className="flex md:flex-row mt-6 lg:space-x-8 justify-center flex-col">
      <div className="md:w-2/12 w-8/12 mx-auto h-64 md:h-96 md:mx-0">
        <img src={image} alt={`Imagens do Projeto ${title}`} className="w-full" />
      </div>
      <div className="md:w-2/12 w-8/12 mx-auto h-64 md:h-96">
        <img src={image2} alt={`Imagens do Projeto ${title}`} className="w-full" />
      </div>
      <div className="md:w-2/12 w-8/12 mx-auto h-64 md:h-96">
        <img src={image3} alt={`Imagens do Projeto ${title}`} className="w-full" />
      </div>
    </div>
  </div>
);

Project.defaultProps = {};

export default Project;
