import React, { ChangeEvent, useState } from "react";
import Greeting from "./Greeting";

type GreetingContainerPropsType = {
  users: any; // need to fix any
  addUserCallback: any; // need to fix any
};

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); // need to fix any
  const [error, setError] = useState<any>(""); // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value); // need to fix
  };
  const addUser = () => {
    alert(`Hello  !`); // need to fix
  };

  const totalUsers = 0; // need to fix

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
