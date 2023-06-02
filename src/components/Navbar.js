import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiChevronLeft, HiMicrophone, HiCog } from 'react-icons/hi';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="header">
        <ul className="back-stats">
          <li><NavLink to="/"><HiChevronLeft /></NavLink></li>
          <li>Covid Stats</li>
          <li className="mic-settings">
            <div><HiMicrophone /></div>
            <div><HiCog /></div>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
