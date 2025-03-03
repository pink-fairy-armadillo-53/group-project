import React from 'react'
import '../assets/styling/Navbar.css'
import {FaRegUser, FaRegBell} from 'react-icons/fa'

const Navbar = ()=>{
return (
<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      Rotten
    </a>
    <ul className="nav-links">
      <li>
        <a href="#">Movies</a>
      </li>
      <li>
        <a href="#">Series</a>
      </li>
      <li>
        <a href="#">TV Shows</a>
      </li>
    </ul>
  </div>

    <ul className="nav-links signin">
        <li>
        <a href="#"><FaRegBell/></a>
      </li>
      <li>
        <a href="#"><FaRegUser/></a>
      </li>
  </ul>
</nav>
)
}

export default Navbar