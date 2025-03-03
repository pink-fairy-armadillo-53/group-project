// Child component that displays nav bar (for generic home page and logged in users) and search bar

import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
//This is just a temporary navbar for testing routes. Feel free to edit or replace with your navbar later. -Arthur
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo"><a href="#">Rotten</a></div>

      <ul className='navbar-left'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login/Register</Link>
        </li>
        <li>
        <Link to='/movies'>Movies</Link>
        </li>
        <li>
          <Link to='/my-reviews'>Reviews</Link>
        </li>
      </ul>

      <ul className='navbar-right'>
        <li><input type="search" id="site-search" name="q" /></li>
        <li>
        <Link to='/favorites'><FaRegHeart/></Link>
        </li>
        <li>
          <Link to='/login'><FaRegUser/></Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
