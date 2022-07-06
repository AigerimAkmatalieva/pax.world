
import {Link} from "react-router-dom";
import classes from "./FooterNavItem.module.css"



function FooterNavItem({children}) {
  return ( 
    <li>
      <Link to="/road-map" className={classes.button}>
        {children}
      </Link>
  </li>
   );
}

export default FooterNavItem;