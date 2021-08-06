import React, { Fragment, useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import styles from "./HW11.module.css";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const changeHandler = (value: number) => {
    setValue1(value);
  };

  const changeDoubleHandler = (min: number, max: number) => {
    let gap = 0;
    if (max - min <= gap) {
      setValue1(max - gap);
      setValue2(min + gap);
    } else {
      setValue1(min);
      setValue2(max);
    }
    console.log("Min: " + value1 + "Max: " + value2);
  };

  return (
    <Fragment>
      <div className={styles.mainWrapper}>
        homeworks 11
        {/*should work (должно работать)*/}
        <div className={styles.wrapper}>
          <div className={styles.values}>
            <span>{value1}</span>
          </div>
          <SuperRange onChangeRange={changeHandler} value={value1} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.values}>
            <span>{value1}</span>
            <span>-</span>
            <span>{value2}</span>
          </div>
          <SuperDoubleRange
            min={value1}
            max={value2}
            onChangeRange={changeDoubleHandler}
          />
        </div>
      </div>
      {/* <hr /> */}
    </Fragment>
  );
}

export default HW11;
