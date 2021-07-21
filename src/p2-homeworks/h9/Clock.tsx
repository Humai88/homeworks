import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from "./Clock.module.css";
import moment from "moment";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);
  const [showTime, setShowTime] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId);
  };

  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(id);
    setShowTime(true);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const stringTime = date.toLocaleTimeString();
  const stringDate = moment().format("L");

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {showTime && (
          <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {stringTime}
          </div>
        )}
        {show && <div className={styles.day}>{stringDate}</div>}
      </div>
      <SuperButton className={styles.btn} onClick={start}>
        start
      </SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>
    </div>
  );
}

export default Clock;
