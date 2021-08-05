import React, { Fragment, useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import styles from "./HW11.module.css";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);
  const [disable, setDisable] = useState(false);

  const changeHandler = (value: number) => {
    setValue1(value);
  };

  const changeDoubleHandler = (min: number, max: number) => {
    setValue1(min);
    setValue2(max);
    if (value1 >= value2 || value2 <= value1) {
      setDisable(true);
    }
  };

  return (
    <Fragment>
      <div className={styles.mainWrapper}>
        homeworks 11
        {/*should work (должно работать)*/}
        <div className={styles.wrapper}>
          <span className={styles.header}>{value1}</span>
          <SuperRange onChangeRange={changeHandler} value={value1} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span>{value1}</span>
            <span>{value2}</span>
          </div>
          <div>
            <SuperDoubleRange
              onChangeRange={changeDoubleHandler}
              // min={value1}
              // max={value2}
              disabled={disable}
            />
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
}

export default HW11;
