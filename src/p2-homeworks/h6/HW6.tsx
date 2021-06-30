import React, { useState } from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { restoreState, saveState } from "./localStorage/localStorage";
import s from "./HW6.module.css";

function HW6() {
  const [value, setValue] = useState<string>("");

  const save = () => {
    saveState<string>("editable-span-value", value);
  };
  const restore = () => {
    const state: string = restoreState<string>("editable-span-value", value);
    setValue(state);
  };

  return (
    <React.Fragment>
      homeworks 6{/*should work (должно работать)*/}
      <div className={s.wrapper}>
        <SuperEditableSpan
          className={s.input}
          value={value}
          onChangeText={setValue}
          spanProps={{ children: value ? undefined : "enter text..." }}
        />

        <div className={s.btnsWrapper}>
          <SuperButton className={s.btn} onClick={save}>
            save
          </SuperButton>
          <SuperButton className={s.btn} onClick={restore}>
            restore
          </SuperButton>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HW6;
