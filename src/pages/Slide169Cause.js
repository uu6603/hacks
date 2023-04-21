import { Link } from "react-router-dom";
import styles from "./Slide169Cause.module.css";

const Slide169Cause = () => {
  return (
    <div className={styles.slide169Cause}>
      <div className={styles.homeDiv}>
        <Link className={styles.logoA} to="/slide-169-1">
          <div className={styles.rectangleDiv} />
          <div className={styles.groupDiv}>
            <div className={styles.deblisDiv}>SolNFT</div>
            <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          </div>
        </Link>
        <button className={styles.frameButton}>
          <div className={styles.frameDiv}>
            <div className={styles.groupDiv1}>
              <img
                className={styles.image2Icon}
                alt=""
                src="../image-2@2x.png"
              />
              <div className={styles.connectWalletDiv}>Connect Wallet</div>
            </div>
          </div>
        </button>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
        <div className={styles.causeDiv}>
          <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
          <div className={styles.groupDiv2}>
            <div className={styles.wereHereForACause}>
              Here for a prize!!
            </div>
          </div>
        </div>
     
        <div className={styles.rectangleDiv1} />
        <div className={styles.madeWithByTeamKasukabeD}>
          {" "}
          made with ❤ by team kasukabe defence group ️
        </div>
        <div className={styles.logoDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupDiv}>
            <div className={styles.deblisDiv}>GateIt</div>
            <img className={styles.vectorIcon} alt="" src="../vector2.svg" />
          </div>
        </div>
        <div className={styles.whatIsDeblis}>What is SolNFT?</div>
        <div className={styles.teamKasukabeDefenceGroup}>
          Team : Kasukabe Defence group
        </div>
        <div className={styles.over90OfPeopleWithDisabi}>
          <p className={styles.over90Of}>
          
          </p>
          <p className={styles.over90Of}>
          
          </p>
          <p className={styles.over90Of}>
          
          </p>
          <p className={styles.over90Of}>
           
          </p>
          <p className={styles.impairmentWhichCan}>
            
          </p>
        </div>
      </div>
      
          
    </div>
  );
};

export default Slide169Cause;
