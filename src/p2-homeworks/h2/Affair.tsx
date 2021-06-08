import React from "react";
import { AffairType } from "./HW2";
import { FaTimes } from "react-icons/fa";
import styles from "./Affairs.module.css";

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}> {props.affair.name}</div>
      <div className={styles.priorWrapper}>
        <div
          style={
            props.affair.priority === "high"
              ? { color: "#ff5151" }
              : props.affair.priority === "middle"
              ? { color: "#ffaf47" }
              : { color: "#02daab" }
          }
          className={styles.priority}
        >
          [{props.affair.priority}]
        </div>
      </div>

      <button className={styles.deleteBtn} onClick={deleteCallback}>
        <FaTimes style={{ color: "rgb(192, 143, 238)" }} />
      </button>
    </div>
  );
}

export default Affair;
