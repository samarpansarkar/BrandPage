import React from "react";
import logo from '../assets/brand_logo.png';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar_container">
        <div className="navbar_container-logo">
            <img src={logo} alt="logo" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
