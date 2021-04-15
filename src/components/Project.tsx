import React, { FC } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import images from '../utils/images';

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
    <p className="font-sans font-semibold text-gray-800 max-w-prose text-center mx-auto text-base">
      {desc}
    </p>
    <div className="flex flex-row mt-6 space-x-6 justify-center">
      <div className="bg-red-600 w-6/12 h-96" />
    </div>
  </div>
);

Project.defaultProps = {};

export default Project;
