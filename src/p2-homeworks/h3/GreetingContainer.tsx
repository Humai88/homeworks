import React, { ChangeEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>;
  addUserCallback: (name: string) => void;
};

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    let userName = e.currentTarget.value;
    if (userName.length === 0 || userName === " ") {
      setError(true);
      setName("");
    } else {
      setName(userName);
      setError(false);
    }
  };

  const addUser = () => {
    if (name.length > 0) {
      alert(`Hello ${name} !`);
      addUserCallback(name);
      setName("");
    }
  };

  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  );
};

export default GreetingContainer;
