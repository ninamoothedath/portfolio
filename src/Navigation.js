import React from 'react';
import { NavLink } from "react-router-dom"; 
import './style.css';

export default function Nav() {
  return (
    <div className="nav">
      <h1><NavLink to="/">Nina Moothedath</NavLink></h1>

      <p><NavLink to="/about">About</NavLink></p>
      <p><NavLink to="/writing">Writing</NavLink></p>
      <p><NavLink to="/cd">Code & Data</NavLink></p>
      <p><NavLink to="/va">Video/Audio</NavLink></p>
      <p><NavLink to="/graphics">Graphics</NavLink></p>
    </div> 
  );
}
