import React, { FC } from 'react';
import { FiAtSign, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Contact: FC = () => (
  <div>
    <div className="pt-6 md:pt-14 md:my-48 md:mx-48 md:px-0">
      <div className="flex md:flex-row flex-col">
        <a href="mailto: vinicius.isumi@gmail.com">
          <FiAtSign className="mx-auto hover:transition duration-150 ease-in-out
            transform hover:scale-125 hover:text-aqua-dark text-4xl"
          />
        </a>
        <p className="font-serif font-semibold text-black text-3xl pl-8 hidden md:block">
          vinicius.isumi@gmail.com
        </p>
        <p className="font-serif text-center font-semibold text-black pl-4 text-3xl md:hidden">
          vinicius.isumi
          @gmail.com
        </p>
      </div>
      <div className="flex md:flex-row flex-col pt-12 md:pt-14">
        <a href="https://www.linkedin.com/in/vinicius-isumi-9b5831197/" rel="noreferrer" target="_blank">
          <FiLinkedin className="mx-auto hover:transition duration-150 ease-in-out
            transform hover:scale-125 hover:text-[#006699] text-4xl"
          />
        </a>
        <p className="font-serif text-center font-semibold text-black text-3xl md:pl-8">
          Vinicius Isumi
        </p>
      </div>
      <div className="flex md:flex-row flex-col pt-12 md:pt-14">
        <a href="https://www.instagram.com/isumihm/" rel="noreferrer" target="_blank">
          <FiInstagram className="mx-auto hover:transition duration-150 ease-in-out
            transform hover:scale-125 hover:text-[#C1558B] text-4xl"
          />
        </a>
        <p className="font-serif text-center font-semibold text-black text-3xl md:pl-8">
          isumihm
        </p>
      </div>
      <div className="flex md:flex-row flex-col pt-12 md:pt-14">
        <a href="https://github.com/visumi" rel="noreferrer" target="_blank">
          <FiGithub className="mx-auto hover:transition duration-150 ease-in-out
            transform hover:scale-125 text-4xl"
          />
        </a>
        <p className="font-serif text-center font-semibold text-black text-3xl pb-6 md:pl-8">
          visumi
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
