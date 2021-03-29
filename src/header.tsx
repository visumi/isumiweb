import React, { FC } from 'react';
// import DarkModeToggle from 'react-dark-mode-toggle';

const Header: FC = () => (
  // const [isDarkMode, setIsDarkMode] = useState(false);
  <div className="flex lg:flex-row flex-col items-center py-10 pl-48 select-none">
    <div className="flex-grow">
      <h1 className="font-serif font-black text-4xl md:pb-0 pb-4 hover:text-gray-700">isumi</h1>
    </div>
    <div className="sm:block flex flex-col text-center mx-40">
      <a
        className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:transition duration-150 ease-in-out
        transform hover:scale-125"
        href="/"
      >
        Sobre
      </a>
      <a
        className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:transition duration-150 ease-in-out
        transform hover:scale-125"
        href="/"
      >
        Projetos
      </a>
      <a
        className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
        hover:transition duration-150 ease-in-out motion-safe
        transform hover:scale-125"
        href="/"
      >
        Contato
      </a>
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
