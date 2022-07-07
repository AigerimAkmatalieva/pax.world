import classes from "./GovernanceItem.module.css";

function GovernanceItem() {
  return (
    <div className={classes.GovernanceItem}>
      <div className={classes.background}>
        <h1>The Governance at pax.world</h1>
      </div>

      <div className={classes.p_item}>
        <p>
          At pax.world, governance will be decentralized. Token holders have
          voting rights to the network's development.
          <br />
          Voting rights in the DAO will be represented through the PAXW token.
        </p>
      </div>
    </div>
  );
}

export default GovernanceItem;
