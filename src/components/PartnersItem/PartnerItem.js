import PartnersImage from "../../assets/partners.png"
import Partners2Image from "../../assets/patrners1.png"
import classes from "./PartnersItem.module.css"

function PartnersItem() {
  return ( 
    <div className={classes.Partners}>
     <h1>Partners</h1>
     <hr />
     <img src={PartnersImage} alt="img"  />
     <img src={Partners2Image} alt="img" />
    </div>
   );
}

export default PartnersItem;