import classes from "./RoadmapITem.module.css"
import img from "../../assets/roadmap.png"


function RoadmapItem() {
  return ( 
    <div className={classes.wrapper}>
      <h1 >
        The story of 
        <br/>
        <img src={img} alt="img" className={classes.image} /> pax.world.
      </h1>
    </div>
   );
}

export default RoadmapItem;