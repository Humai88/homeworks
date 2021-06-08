import React from "react";
import styles from "./Message.module.css";
type PropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: PropsType) {
  return (
    <div className={styles.message}>
      <img src={props.avatar} alt="avatar" className={styles.avatar} />
      <div className={styles.message__wrapper}>
        <h3 className={styles.message__name}>{props.name}</h3>
        <p className={styles.message__text}>{props.message}</p>
        <p className={styles.message__time}>{props.time}</p>
      </div>
    </div>
  );
}

export default Message;
