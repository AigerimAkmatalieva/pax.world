import classes from "./Header1.module.css";
import img from "../../assets/header2.svg"

function Header1() {
  return (
    <header className={classes.Header_hero}>
      <div className={classes.background}>
        <p className={classes.p_right}> Our island has 20,000 parcels ready to be owned by our community of neighbors. We will distribute 4,000 parcels before the launch of pax.world in Q3 2022.</p>
        <div className="container">
          <div className={classes.content}>
            <h1>
              <span> Join our </span>
              <br />
              premiere
              <img src={img} alt="img" />
              landsale</h1>

          </div>
          <p className={classes.p_left}>Less is more. There are two ways to own land: outright purchase and through participation in our creator competitions.</p>
        </div>
      </div>

    </header>
  );
}

export default Header1;
