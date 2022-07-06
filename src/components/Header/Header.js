import classes from "./Header.module.css";
import React from "react";
// import VideoBg from "../assets/lam2.mp4";

import VideoBg from "../../assets/lam2.mp4";




function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.background}>
        <div>
          <video
            playsInline="playsInline"
            autoPlay="autoPlay"
            muted="muted"
            loop="loop"
          >
            <source src={VideoBg} type="video/mp4" />
          </video>
        </div>

        <div className="container">
          <div className={classes.content}>
            <h1>
              Engaging
              Experiences
              Beyond reality</h1>
           
          </div>
           <p>Subscribe to our mailing list to stay up to date with the latest events and land sale opportunities</p>
        </div>
      </div>

    </header>
  );
}

export default Header;
