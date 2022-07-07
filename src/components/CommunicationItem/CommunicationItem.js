import img from "../../assets/communication.jpeg";
import classes from "./CommunicationItem.module.css"

function CommunicationItem() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.img}>
        <img src={img} alt="img" />
      </div>
      <div className={classes.card}>
        <h1>Embedded communication technology</h1>
        <p>
          We built the universe thoughtfully, requiring low tech capabilities to
          connect you to the features you love. You can use the advanced tech
          offered by pax.world in daily communicatio
        </p>
      </div>
    </div>
  );
}

export default CommunicationItem;
