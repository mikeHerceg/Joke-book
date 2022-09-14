
import React from "react";
import styles from "./page.module.scss";

interface PageProps {
   children:JSX.Element | JSX.Element[];
   title:string
}

export function Page({
    children,
    title,
  ...props
}:PageProps) {
  return (
    <section {...props} data-testid="page" className={styles['page']}>
        <h1>{title}</h1>
        {children}
    </section>
  )
};

