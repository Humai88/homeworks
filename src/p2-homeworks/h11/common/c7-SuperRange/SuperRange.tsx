import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import styles from "./SuperRange.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeRange?: (value: number) => void;
};

const SuperRange: React.FC<SuperRangePropsType> = ({
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeRange,
  className,
  value,
  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e); // сохраняем старую функциональность

    onChangeRange && onChangeRange(+e.currentTarget.value);
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
          {...restProps}
        />
      </div>
    </div>
  );
};

export default SuperRange;
