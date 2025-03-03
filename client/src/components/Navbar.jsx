import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa"; //User and favorite icons
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Function to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <a href="#">Rotten</a>
      </div>
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      {/* Navbar Links */}
      <div className={`navbar-links-container ${menuOpen ? "active" : ""}`}>
        <ul className="navbar-left">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login/Register</Link></li>
          <li><Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link></li>
          <li><Link to="/my-reviews" onClick={() => setMenuOpen(false)}>Reviews</Link></li>
        </ul>
        <ul className="navbar-right">
          <li><input type="search" id="site-search" name="q" placeholder="Search..." /></li>
          <li><Link to="/favorites" onClick={() => setMenuOpen(false)}><FaRegHeart /></Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}><FaRegUser /></Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;