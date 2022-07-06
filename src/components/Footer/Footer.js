
import NavItem from "../Navbar/NavItem/NavItem";
import classes from "./Footer.css"

function Footer() {
  return (
    <div className={classes.Footer}>
      <ul>
        <li className={classes.li_1}>
          <NavItem />
          <span>pax.world ©2022 All Rights Reserved</span>

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