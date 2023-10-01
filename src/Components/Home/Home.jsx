import React from "react";
import Classes from "./home.module.css";
import shoeImg from "../../assets/shoe_image.png";

const Home = () => {
  return (
    <div className={Classes.home}>
      <div className={Classes.home_text}>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className={Classes.home_buttons}>
            <button className={Classes.home_shopNow}>Shop Now</button>
            <button>Category</button>
        </div>
      </div>
      <div className={Classes.home_image}>
        <img src={shoeImg} alt="show" />
      </div>
    </div>
  );
};

export default Home;
