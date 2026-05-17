import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />
      <ul className={`sm:flex hidden justify-end flex-1 gap-10 flex flex-row`}>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${active === nav.title ? "text-white" : "text-dimWhite"} `}
            onClick={() => setActive(nav.title)}
          >
            <a href={nav.id}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px]"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        }  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className={`flex justify-end flex-1 gap-10 flex flex-col`}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${active === nav.title ? "text-white" : "text-dimWhite"} `}
              onClick={() => setActive(nav.title)}
            >
              <a href={nav.id}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
