import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: boolean;
  totalUsers: number;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({
  name,
  setNameCallback,
  addUser,
  error,
  totalUsers,
}) => {
  return (
    <div className={s.wrapper}>
      <input
        value={name}
        onChange={setNameCallback}
        className={error ? s.error : s.noError}
      />

      {/* <span>{error}</span> */}
      <button
        disabled={error && true}
        className={error || name.length === 0 ? s.disable : s.btn}
        onClick={addUser}
      >
        add
      </button>
      <span>{totalUsers}</span>
      {error && <p>Name required!</p>}
    </div>
  );
};

export default Greeting;
