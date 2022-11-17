import React from 'react';

const Navbar = () => (
  <>
    <div className="nav-container flex">
      <h1>Space Travelers' Hub</h1>
      <ul className="list flex">
        <Link className="link" to="/">
          Rockets
        </Link>
        <Link className="link" to="/missions">
          Missions
        </Link>
        <Link className="link" to="/profile">
          My Profile
        </Link>
      </ul>
      <FaUser className="icon" />
    </div>
  </>
);

export default Navbar;
