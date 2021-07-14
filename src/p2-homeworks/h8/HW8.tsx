import React, { useState } from "react";
import { homeWorkReducer } from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from "./HW8.module.css";

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople: UserType[] = [
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<UserType[]>(initialPeople);

  const finalPeople = people.map((p: UserType) => (
    <div className={styles.list} key={p._id}>
      <div>{p.name} </div>
      <div>{p.age} </div>
    </div>
  ));

  const sortUp = () =>
    setPeople(homeWorkReducer(initialPeople, { type: "SORT", payload: "up" }));
  const sortDown = () =>
    setPeople(
      homeWorkReducer(initialPeople, { type: "SORT", payload: "down" })
    );
  const checkAge = () =>
    setPeople(homeWorkReducer(initialPeople, { type: "CHECK", payload: 18 }));

  return (
    <div>
      homeworks 8
      <div className={styles.wrapper}>
        {finalPeople}
        <div className={styles.btns}>
          <SuperButton className={styles.btn} onClick={sortUp}>
            sort up
          </SuperButton>
          <SuperButton className={styles.btn} onClick={sortDown}>
            sort down
          </SuperButton>
          <SuperButton className={styles.btn} onClick={checkAge}>
            check 18
          </SuperButton>
        </div>
      </div>
    </div>
  );
}

export default HW8;
