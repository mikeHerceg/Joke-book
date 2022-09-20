import React from "react";
import styles from "./grid.module.scss";
import { motion } from 'framer-motion';

interface GridProps {
    children:JSX.Element[]
    // add prop types for components here
}

export function Grid({
    children,
  ...props
}:GridProps) {
    const wrapperVariant = {
        initial:{},
        animate:{
            transition:{
                staggerChildren: 0.15,
            }
        }
    }
  return (
    <motion.div
        initial="initial"
        animate="animate"
        variants={wrapperVariant}
    >
        <div {...props} data-testid="grid" className={styles['grid']}>
            {children}
        </div>
    </motion.div>

  )
};

