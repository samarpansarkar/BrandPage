import React from "react";
import Classes from "./navLink.module.css";
const NavLinks = () => {
  return (
    <div>
      <ul className={Classes.navLink}>
        <li href="#Menu">MENU</li>
        <li href="#Location">LOCATION</li>
        <li href="#About">ABOUT</li>
        <li href="#Contact">CONTACT</li>
      </ul>
    </div>
  );
};

export default NavLinks;
