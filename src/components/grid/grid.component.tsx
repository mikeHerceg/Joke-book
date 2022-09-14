
import React from "react";
import styles from "./grid.module.scss";

interface GridProps {
    children:JSX.Element[]
    // add prop types for components here
}

export function Grid({
    children,
  ...props
}:GridProps) {
  return (
    <div {...props} data-testid="grid" className={styles['grid']}>
       {children}
    </div>
  )
};

