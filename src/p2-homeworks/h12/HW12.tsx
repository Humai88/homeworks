import React from "react";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import s from "./HW12.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeThemeAC, ThemeStateType } from "./bll/themeReducer";
import { AppStoreType } from "../h10/bll/store";

const themes = ["dark", "yellow", "teal"];

function HW12() {
  const theme = useSelector<AppStoreType, ThemeStateType>(
    (state) => state.theme
  );
  const dispatch = useDispatch();

  const onChangeCallback = (currentValue: string) => {
    dispatch(changeThemeAC(currentValue));
  };

  return (
    <div className={s.wrapper}>
      <div className={s[theme.value]}>
        <span className={s[theme.value + "-text"]}>homeworks 12</span>
      </div>
      <SuperRadio
        value={theme.value}
        options={themes}
        onChangeOption={onChangeCallback}
      />
      <hr />
    </div>
  );
}

export default HW12;
