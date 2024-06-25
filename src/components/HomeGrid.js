import React from 'react';
import { NavLink } from "react-router-dom"; 
import '../style.css';

export default function HomeGrid(prop) {
  return (
    <div className="home-grid-row" id={prop.name + '-nav'}>
        <NavLink to={"/"+prop.name}>
          <p className="caption">{prop.text}</p>
        </NavLink>
    </div>
  );
}