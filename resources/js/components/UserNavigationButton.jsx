import { useState } from "react";

const UserNavigationButton = () => {
  const [expand, setExpand] = useState(false);
  const userMenuLinks = [
    { name: 'Profile', link: '/profile', id: 1},
    { name: 'Logout', link: '/logout', id: 2}
  ];

  const userMenu = () => {
    if (expand) {
      return (
        <div className="absolute pt-3 md:right-6 md:mt-6 md:w-[130px] w-full md:top-7 top-[195px] right-0 bg-white">
          <ul className="pl-9">
            { userMenuLinks.map(link => (
              <li className="text-xl md:my-0 py-3" key={link.id}>
                <a
                  href={link.link}
                  className="border-b-0 border-gray-800 text-gray-700 hover:text-gray-400 duration-500 cursor-pointer ml-3"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return (
    <>
      <li className="md:ml-8 text-xl md:my-0 my-7" onClick={() => setExpand(!expand)}>
        <div className="relative">
          <span className="text-gray-700 hover:text-gray-400 duration-500 cursor-pointer">User</span>
        </div>
      </li>
      { userMenu() }
    </>
  );
}

export default UserNavigationButton;
