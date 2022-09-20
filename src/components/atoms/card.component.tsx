import styles from './atoms.module.scss';


interface CardProps {
    children:JSX.Element,
    style?: React.CSSProperties;
}

export function Card({ children,style}:CardProps) {
  return (
    <div style={style} className={styles.card}>
      {children}
    </div>
  );
}
