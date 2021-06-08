import React, { useState } from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";

// types
export type UserType = {
  _id: string;
  name: string;
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

  const addUserCallback = (name: string) => {
    let newUser = { _id: v1(), name: name };
    let newUsers = [...users, newUser];
    setUsers(newUsers);
    console.log(newUsers);
  };

  return (
    <div>
      homeworks 3{/*should work (должно работать)*/}
      <hr />
      <GreetingContainer users={users} addUserCallback={addUserCallback} />
    </div>
  );
}

export default HW3;
