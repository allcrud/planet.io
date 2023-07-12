import React from "react";

const Navbar: React.FC = () => (
  <>
    <header id="header">
      <a className="logo">Planet.in</a>
      <ul>
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Destination</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  </>
);

export default Navbar;
