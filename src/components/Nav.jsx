// import logo from './logo.svg';
import React from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import img from '../assets/logo.png'
import './Navbar.css'

function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src={img} alt="" className='h-24 cursor-pointer' />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav
