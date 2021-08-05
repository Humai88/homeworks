import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import styles from "./SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = DefaultInputPropsType & {
  onChangeRange?: (value1: number, value2: number) => void;
  value?: [number, number];
  min?: number;
  max?: number;
  step?: number;
  disable?: boolean;
};
type NewType = InputHTMLAttributes<HTMLInputElement>;

type DefaultInputPropsType = DetailedHTMLProps<NewType, HTMLInputElement>;
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  onChange,
  value,
  min,
  max,
  step,
  disable,
  className,
  ...restProps
}) => {
  type InitialValuesType = {
    startValue: number;
    endValue: number;
  };
  const [values, setValues] = useState<InitialValuesType>({
    startValue: 0,
    endValue: 100,
  }); // Set values for two inputs

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    let { name, value } = e.currentTarget;
    let newValue = +value;
    setValues({
      ...values,
      [name]: newValue,
    });
    onChangeRange && onChangeRange(values.startValue, values.endValue);
  };
  const finalRangeClassName = `${styles.slider} ${className ? className : ""}`;
  return (
    <div>
      <input
        type="range"
        className={finalRangeClassName}
        onChange={onChangeCallback}
        value={values.endValue}
        name="endValue"
      />
      <input
        type="range"
        className={finalRangeClassName}
        onChange={onChangeCallback}
        value={values.startValue}
        name="startValue"
      />
      {disable && <h1>Try again</h1>}
    </div>
  );
};

export default SuperDoubleRange;
