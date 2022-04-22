import React, { PropsWithChildren, memo } from "react";
import styles from "./Button.module.scss";

type Props = {
  onClick?: () => void;
};

export default memo(function Button({
  children,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
});
