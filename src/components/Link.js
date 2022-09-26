import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ link, name }) => {
  return (
    <NavLink
      to={link}
      className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
    >
      <li>{name}</li>
    </NavLink>
  );
};

export default Link;
