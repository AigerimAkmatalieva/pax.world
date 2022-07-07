
import Navbar from "../Navbar/Navbar";
import classes from "./Toolbar.module.css";

function Toolbar({toggle}) {
  return ( 
    <div className={classes.Toolbar}>
      <Navbar toggle={toggle}/>
      
    </div>
  );
}

export default Toolbar;