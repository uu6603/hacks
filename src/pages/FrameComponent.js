import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.deblisDiv}>GateIt</div>
        <img className={styles.vectorIcon} alt="" src="../vector13.svg" />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <img className={styles.vectorIcon1} alt="" src="../vector14.svg" />
      <div className={styles.rectangleDiv2} />
      <img className={styles.vectorIcon2} alt="" src="../vector15.svg" />
    </div>
  );
};

export default FrameComponent;