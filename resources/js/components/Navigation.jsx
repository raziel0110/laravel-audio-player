import UserNavigationButton from "./UserNavigationButton";
import { useState } from 'react';

const Navigation = () => {
  const links = [
    { name: 'Home', link: '/', key: 1 },
    { name: 'About', link: '/about', key: 2 },
    { name: 'Playlist', link: '/playlist', key: 3 },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shodow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          Logo
        </div>
        <div className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          <span>
            <i className={`fa-solid fa-${open ? 'xmark' : 'bars'}`}></i>
          </span>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-10' : 'top-[-490px]'}`}>
          {
            links.map(link => {
              return (
              <li className="md:ml-8 text-xl md:my-0 my-7" key={link.key}>
                <a href={link.link} className="text-gray-700 hover:text-gray-400 duration-500 cursor-pointer">{link.name}</a>
              </li>
              )
            })
          }
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <UserNavigationButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
