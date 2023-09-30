import React from "react";
import Classes from './navbar.module.css';
import logo from '../assets/brand_logo.png';


const Navbar = () => {
  return (
    <React.Fragment>
      <div className={Classes.navbar_container}>
        <div className={Classes.navbar_logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={Classes.navbar_options}>
            menu
        </div>
        <div className="navbar-login">
            <button>Login</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
