import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import styles from "./SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = DefaultInputPropsType & {
  onChangeRange?: (value1: number, value2: number) => void;
  min: number;
  max: number;
};
type NewType = InputHTMLAttributes<HTMLInputElement>;

type DefaultInputPropsType = DetailedHTMLProps<NewType, HTMLInputElement>;
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  onChange,
  value,
  className,
  min,
  max,
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
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sliderTrack}></div>
        <input
          type={"range"}
          className={styles.doubleRange}
          onChange={onChangeCallback}
          name="startValue"
          value={min}
          {...restProps}
        />
        <input
          type={"range"}
          className={styles.doubleRange}
          onChange={onChangeCallback}
          name="endValue"
          value={max}
          {...restProps}
        />
      </div>
    </div>
  );
};

export default SuperDoubleRange;
