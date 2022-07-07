import { useState } from "react";
import AsideButton from "../AsideButton/AsideButton";
import Drawer from "../Drawer/Drawer";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";

function Layout({ children }) {
  const [switcher, setSwitcher] = useState(false);

  function onToggle(event) {
    setSwitcher(!switcher);
  }
  return ( 
    <div className={classes.Layout}>
      <Toolbar toggle={onToggle}/>
      <Drawer state={switcher} toggle={onToggle} />
      <div className="container">
        {children}
      </div>

      <AsideButton left>
          Yes Honors
        </AsideButton>
      <AsideButton right>
        Not Honors
      </AsideButton>
    </div>
  );
}

export default Layout;