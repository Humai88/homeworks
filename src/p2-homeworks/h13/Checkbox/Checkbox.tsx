import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import s from "./Checkbox.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type CheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
  id: string;
};

const Checkbox: React.FC<CheckboxPropsType> = ({
  type,
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children,
  id,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
  };

  return (
    <>
      <input
        className={s.input}
        id={id}
        type={"checkbox"}
        onChange={onChangeCallback}
        {...restProps}
      />
      {children && <span className={s.checkmark}>{children}</span>}
      <label className={s.label} htmlFor={id}></label>
    </>
  );
};

export default Checkbox;
