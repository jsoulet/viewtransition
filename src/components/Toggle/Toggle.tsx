"use client";
import { flushSync } from "react-dom";
import styles from "./styles.module.css";

interface Props {
  onChange: () => void;
  isChecked: boolean;
}
function Toggle({ onChange, isChecked }: Props) {
  const handleChange = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => onChange());
      });
      return;
    }
    console.log("onChange");
    onChange();
  };

  return (
    <label className={styles.toggle}>
      <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange={handleChange}></input>
    </label>
  );
}

export default Toggle;
