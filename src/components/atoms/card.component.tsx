import styles from './atoms.module.scss';


interface CardProps {
    children:JSX.Element
}

export function Card({ children, ...props }:CardProps) {
  return (
    <div {...props} className={styles.card}>
      {children}
    </div>
  );
}
