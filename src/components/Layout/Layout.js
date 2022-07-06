import { useState } from "react";
import AsideButton from "../AsideButton/AsideButton";
import Drawer from "../Drawer/Drawer";
import FooterNav from "../FooterNav/FooterNav";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";

function Layout() {
  const [switcher, setSwitcher] = useState(false);

  function onToggle(event) {
    setSwitcher(!switcher);
  }
  return ( 
    <div className={classes.Layout}>
      <Toolbar toggle={onToggle}/>
      <Drawer state={switcher} toggle={onToggle} />

      <AsideButton left>
          Yes Honors
        </AsideButton>
      <AsideButton right>
        Not Honors
      </AsideButton>

      <FooterNav />
    </div>
  );
}

export default Layout;