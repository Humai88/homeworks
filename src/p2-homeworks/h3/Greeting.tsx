import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";
import SuperInputText from "./../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "./../h4/common/c2-SuperButton/SuperButton";

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
      <SuperInputText
        value={name}
        onChange={setNameCallback}
        className={error ? s.error : s.noError}
      />

      <SuperButton
        disabled={error && true}
        className={error || name.length === 0 ? s.disable : s.btn}
        onClick={addUser}
      >
        add
      </SuperButton>
      <span>{totalUsers}</span>
      {error && <p>Name required!</p>}
    </div>
  );
};

export default Greeting;
