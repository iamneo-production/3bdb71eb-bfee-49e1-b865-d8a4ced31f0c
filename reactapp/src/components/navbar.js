// import React from "react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";
import "../pages/entertaiment";
import { MdAccountCircle } from 'react-icons/md';
function Navbar() {
    const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">News Aggregator</a>
      </div>
      <ul className="navbar-links">
      
        <li>
        <Link to='./home'><button class="button">
    <span class="button-content">Home </span>
</button></Link>
        </li>
        <li>
       <Link to ="/newsapi"><button class="button">
    <span class="button-content"> Latest Headlines </span>
</button></Link>
        </li>
        
        <li>
       <Link to ="/bussiness"><button class="button">
    <span class="button-content"> Bussiness </span>
</button></Link>
        </li>
        <li>
       <Link to ="/entertaiment"><button class="button">
    <span class="button-content">Entertaiment</span>
</button></Link>
        </li>
        <li>
       <Link to ="/game"><button class="button">
    <span class="button-content">Sport</span>
</button></Link>
        </li>
        <li>
       <Link to ="/technology"><button class="button">
    <span class="button-content">Technology</span>
</button></Link>
        </li>
        <li>
        <Link to="/science"><button class="button">
    <span class="button-content">Science</span>
</button></Link>
        </li>
        <li>
        <Link to="/health"><button class="button">
    <span class="button-content">Health</span>
</button></Link>
        </li>
        <li>
        <Link to="/contactus"><button class="button">
    <span class="button-content">Contact Us</span>
</button></Link>
        </li>
      </ul>
      
      <div className="navbar-icons">
      
<Link to="/register"><button class="button">
    <span class="button-content">Sign Up </span>
</button></Link>

        <Link to="/">
          <a><MdAccountCircle className="login-icon" />
        </a></Link>
        
      </div>
    </nav>
  );
}

export default Navbar;

