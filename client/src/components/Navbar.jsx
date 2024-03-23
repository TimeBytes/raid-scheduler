/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center bg-slate-600 py-5">
        <ul className="flex flex-row justify-between w-6/12 text-white">
          <li>Raid Party</li>
          <li>Character</li>
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
