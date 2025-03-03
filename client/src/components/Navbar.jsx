// Child component that displays nav bar (for generic home page and logged in users) and search bar

import React from 'react';
import { Link } from 'react-router-dom';

//This is just a temporary navbar for testing routes. Feel free to edit or replace with your navbar later. -Arthur
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login/Register</Link>
        </li>
        <li>
          <Link to='/favorites'>Favorites</Link>
        </li>
        <li>
          <Link to='/my-reviews'>My Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
