import React, { FC } from 'react';
import { FiBook, FiBriefcase, FiCode } from 'react-icons/fi';

const About: FC = () => (
  <div>
    <div className="my-48 flex justify-center space-x-96 pt-4">
      <div>
        <FiBook className="text-6xl text-red-800" />
        <p className="font-serif font-bold text-black text-3xl my-2">Formação</p>
      </div>
      <div>
        <FiBriefcase className="text-6xl text-indigo-900" />
        <p className="font-serif font-bold text-black text-3xl my-2">Carreira</p>
      </div>
      <div>
        <FiCode className="text-6xl text-green-700" />
        <p className="font-serif font-bold text-black text-3xl my-2">Tecnologias</p>
      </div>
    </div>
  </div>
);

export default About;
