import React from "react";
import Affair from "./Affair";
import { AffairType, FilterType } from "./HW2";
import styles from "./Affairs.module.css";

type AffairsPropsType = {
  data: Array<AffairType>;
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const setAll = () => {
    props.setFilter("all");
  };
  const setHigh = () => {
    props.setFilter("high");
  };
  const setMiddle = () => {
    props.setFilter("middle");
  };
  const setLow = () => {
    props.setFilter("low");
  };

  return (
    <div>
      {mappedAffairs}
      <div className={styles.buttonsWrapper}>
        <button className={styles.all} onClick={setAll}>
          All
        </button>
        <button className={styles.high} onClick={setHigh}>
          High
        </button>
        <button className={styles.mid} onClick={setMiddle}>
          Middle
        </button>
        <button className={styles.low} onClick={setLow}>
          Low
        </button>
      </div>
    </div>
  );
}

export default Affairs;
