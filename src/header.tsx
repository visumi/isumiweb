import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
// import DarkModeToggle from 'react-dark-mode-toggle';

const Header: FC = () => (
  // const [isDarkMode, setIsDarkMode] = useState(false);
  <div className="flex lg:flex-row flex-col items-center py-10 pl-48 select-none">
    <div className="flex-grow">
      <NavLink to="/">
        <h1 className="font-serif font-black text-4xl md:pb-0 pb-4 hover:text-gray-700">isumi</h1>
      </NavLink>
    </div>
    <div className="sm:block flex flex-col text-center mx-40">
      <NavLink
        className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:transition duration-150 ease-in-out
        transform hover:scale-125"
        activeClassName="border-b-2 border-black hover:scale-100"
        to="/sobre"
      >
        Sobre
      </NavLink>
      <NavLink
        className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:transition duration-150 ease-in-out
        transform hover:scale-125"
        activeClassName="border-b-2 border-black hover:scale-100"
        to="/projetos"
      >
        Projetos
      </NavLink>
      <NavLink
        className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:transition duration-150 ease-in-out motion-safe
        transform hover:scale-125"
        activeClassName="border-b-2 border-black hover:scale-100"
        to="/contato"
      >
        Contato
      </NavLink>
    </div>
    {/* <div className="flex px-20">
        <DarkModeToggle
          className="focus:outline-none"
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={60}
        />
      </div> */}
  </div>
);

export default Header;
