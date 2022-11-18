import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import './navbar.css';

const NavBar = () => {
  const Links = [
    { name: 'Rockets', path: '/', id: '1' },
    { name: 'Missions', path: '/mission', id: '2' },
    { name: 'Profile', path: '/profile', id: '1' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logoImage" src={logo} alt="logo" />
        <p> Space Travelers Hub </p>
      </div>
      <div>
        <ul className="navLinks">
          {Links.map((el) => (
            <li className="navLink" key={el.id}>
              <NavLink
                to={el.path}
                className={({ isActive }) => (isActive ? 'active' : 'deactive')}
              >
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
