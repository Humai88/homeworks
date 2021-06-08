import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: any; // need to fix any
  addUser: any; // need to fix any
  error: any; // need to fix any
  totalUsers: any; // need to fix any
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({
  name,
  setNameCallback,
  addUser,
  error,
  totalUsers,
}) => {
  const inputClass = s.error; // need to fix with (?:)
  const buttonClass = s.btn;
  return (
    <div className={s.wrapper}>
      <input value={name} onChange={setNameCallback} className={inputClass} />
      <span>{error}</span>
      <button className={buttonClass} onClick={addUser}>
        add
      </button>
      <span>{totalUsers}</span>
    </div>
  );
};

export default Greeting;
