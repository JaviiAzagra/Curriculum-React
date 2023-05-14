import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = ({ sticky }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="Cabecera">
      <div>
          <h2>JaviiAzagra</h2>
        </div>
      <button onClick={toggleMenu} className="Cabecera-button">
        <svg
          className="Cabecera-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <div className="links">
          <ul className="Cabecera-ul">
            <li className="Cabecera-li">
              <a href="#Home" className="Cabecera-a">
                Home
              </a>
            </li>
            <li className="Cabecera-li">
              <a href="#About" className="Cabecera-a">
                About
              </a>
            </li>
            <li className="Cabecera-li">
              <a href="#Projects" className="Cabecera-a">
                Projects
              </a>
            </li>
            <li className="Cabecera-li">
              <a href="#Contact" className="Cabecera-a">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
