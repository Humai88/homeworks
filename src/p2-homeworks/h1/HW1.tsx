import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
  avatar: "https://to-name.ru/images/biography/skott-valter.jpg",
  name: "Walter Scott",
  message: "Hello William ^_^",
  time: "11:00",
};
const AlternativeMessageData = {
  avatar:
    "https://i2-prod.coventrytelegraph.net/incoming/article9091017.ece/ALTERNATES/s1200c/williamshakespeare.jpg",
  name: "William Shakespeare",
  message: "Hello Scott ^_-",
};

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let currentTime = `${hours}:${minutes}`;

function HW1() {
  return (
    <div>
      <br />
      <br />
      homeworks 1
      <hr />
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <AlternativeMessage
        avatar={AlternativeMessageData.avatar}
        name={AlternativeMessageData.name}
        message={AlternativeMessageData.message}
        time={currentTime}
      />
    </div>
  );
}

export default HW1;
