import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className={
          "w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
        }
      >
        <p className="blue-gradient_text">O5</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to={'/Contact'} className={({ isActive })=> isActive ? 'text-blue-500' : 'text-black'}>
           Contact
        </NavLink>
        <NavLink to={'/Projects'} className={({ isActive })=> isActive ? 'text-blue-500' : 'text-black'}>
              Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
