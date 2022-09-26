import React from "react";
import Link from "./Link";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <Link link="/" name="accueil" />
        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <Link link="/project-1" name="projet 1" />
            <Link link="/project-2" name="projet 2" />
            <Link link="/project-3" name="projet 3" />
            <Link link="/project-4" name="projet 4" />
          </ul>
        </li>
        <Link link="/contact" name="contact" />
      </ul>
    </div>
  );
};

export default Navigation;
