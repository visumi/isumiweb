import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';
// import DarkModeToggle from 'react-dark-mode-toggle';

const data = [
  {
    to: '/sobre',
    title: 'Sobre',
  },
  {
    to: '/projetos',
    title: 'Projetos',
  },
  {
    to: '/contato',
    title: 'Contato',
  },
];

const Header: FC = () => {
  const isShowing = true;

  return (
  // const [isDarkMode, setIsDarkMode] = useState(false);
    <Transition
      appear
      show={isShowing}
    >
      <div className="flex xl:flex-row flex-col mx-auto items-center py-10 xl:pl-48 select-none">
        <div className="flex-grow">
          <NavLink to="/">
            <Transition.Child
              enter="transition ease-in-out duration-1000 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
            >
              <h1 className="font-serif font-black text-4xl md:pb-0 pb-4 hover:text-gray-700">泉isumi</h1>
            </Transition.Child>
          </NavLink>
        </div>
        <Transition.Child
          enter="transition ease-in-out duration-1000 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
        >
          <div className="sm:block flex flex-col text-center xl:mx-32 md:pt-4">
            {
          data.map((d) => (
            <NavLink
              className="inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4
              hover:transition duration-150 ease-in-out
              transform hover:scale-125"
              activeClassName="text-red-800"
              to={d.to}
              key={d.to}
              exact
            >
              {d.title}
            </NavLink>
          ))
        }
          </div>
        </Transition.Child>

        {/* <div className="flex px-20">
          <DarkModeToggle
            className="focus:outline-none"
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
        </div> */}
      </div>
    </Transition>
  );
};

export default Header;
