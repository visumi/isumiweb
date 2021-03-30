import React, { FC } from 'react';
import { FiAtSign, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Contact: FC = () => (
  <div>
    <div className="my-48 mx-48">
      <div className="flex flex-row">
        <a href="mailto: pancake.tf2@gmail.com">
          <FiAtSign className="hover:transition duration-150 ease-in-out
            transform hover:scale-125 hover:text-aqua-dark text-4xl"
          />
        </a>
        <p className="font-serif font-semibold text-black text-3xl pl-8">
          pancake.tf2@gmail.com
        </p>
      </div>
      <div className="flex flex-row pt-14">
        <a href="https://www.linkedin.com/in/vinicius-isumi-9b5831197/" rel="noreferrer" target="_blank">
          <FiLinkedin className="hover:transition duration-150 ease-in-out
            transform hover:scale-125 hover:text-[#006699] text-4xl"
          />
        </a>
        <p className="font-serif font-semibold text-black text-3xl pl-8">
          Vinicius Isumi
        </p>
      </div>
      <div className="flex flex-row pt-14">
        <a href="https://www.instagram.com/isumihm/" rel="noreferrer" target="_blank">
          <FiInstagram className="hover:transition duration-150 ease-in-out
            transform hover:scale-125 hover:text-[#C1558B] text-4xl"
          />
        </a>
        <p className="font-serif font-semibold text-black text-3xl pl-8">
          isumihm
        </p>
      </div>
      <div className="flex flex-row pt-14">
        <a href="https://github.com/visumi" rel="noreferrer" target="_blank">
          <FiGithub className="hover:transition duration-150 ease-in-out
            transform hover:scale-125 text-4xl"
          />
        </a>
        <p className="font-serif font-semibold text-black text-3xl pl-8">
          visumi
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
