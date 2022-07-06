import classes from "./Footer.module.css"
import logo from "../../assets/pax.svg"

function Footer() {
  return (
    <div className={classes.Footer}>
      <ul>
        <li className={classes.li_1}>
        <img src={logo} alt="footer"/>
          <h5>pax.world ©2022 All Rights Reserved</h5>

        </li>
        <li className={classes.li_2}>
          <div>
            <li>Contact Us</li>
            <span>
              Made in
            </span>
          </div>
          <div>
            <li>Brand Assets</li>
            <span>Switzerland</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Footer;