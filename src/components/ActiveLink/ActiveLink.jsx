import React from "react";
import './ActiveLink.css'
import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
  return (
    <NavLink
    style={{ margin: '0 20px', textDecoration: 'none' }}
      to={to}
      className={({ isActive }) => isActive ? "active" : "normal" } 
      >
        {children}
    </NavLink>
  );
};

export default ActiveLink;
