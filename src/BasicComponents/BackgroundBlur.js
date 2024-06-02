import React from "react";
import styles from './BasicComponents.module.css'


export const BackgroundBlur = ({children}) => {
    return (
      <div className={styles.blurBackground}>
       
        {children}
      
      </div>
    )
}