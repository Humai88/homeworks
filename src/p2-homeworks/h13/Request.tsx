import React, { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import Checkbox from "./Checkbox/Checkbox";

import { requestAPI } from "./RequestAPI";

export const Request = () => {
  const [state, setState] = useState<any>(null);
  const [value, setValue] = useState<any>(false);
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked);
  };

  const onClickCallback = () => {
    requestAPI
      .post(value)
      .then((res) => setState(res.data))
      .catch((error) => {
        setState(error);
      });
  };
  return (
    <>
      <div>{JSON.stringify(state)}</div>
      <SuperButton onClick={onClickCallback}>make request</SuperButton>
      <Checkbox id="input" onChange={onChangeCallback} checked={value} />
    </>
  );
};
