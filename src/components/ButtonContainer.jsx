import React from 'react'
import styles from "./ButtonContainer.module.css"
export default function ButtonContainer({onButtonClicked}) {
    const buttonNames = ['C' , '1' ,  '2', '+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttons)=>(<button className={styles.button} onClick={() => onButtonClicked(buttons)}>{buttons}</button>))}
      </div>
  )
}
