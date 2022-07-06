import classes from "./FooterNav.module.css";
import { FaPaperPlane } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";

import { FaSpinner } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterNavItem from "./FooterNavItem/FooterNavItem";



function FooterNav() {
  return ( 

    <div className={classes.FooterNav}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <ul className={classes.list}>
              <FooterNavItem>
                <FaPaperPlane/>
              </FooterNavItem>
               <FooterNavItem>
                <FaTwitter/>
              </FooterNavItem>

              <FooterNavItem>
                <FaRobot/>
              </FooterNavItem>

              
              <FooterNavItem>
                <FaSpinner/>
              </FooterNavItem>
             
              <FooterNavItem>
                <FaMediumM/>
              </FooterNavItem>

              <FooterNavItem>
                <FaYoutube/>
              </FooterNavItem>


            </ul>

            <ul className={classes.list_2}>
              
            <FooterNavItem>
               Subscribe
              </FooterNavItem>
              
              <FooterNavItem>
                Get your land
              </FooterNavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
   );
}

export default FooterNav;