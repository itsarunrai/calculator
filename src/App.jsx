import { useState } from 'react';
import styles from './App.module.css';
import ButtonContainer from './components/ButtonContainer';
import Display from './components/Display';
function App() {
  //Initializng the state 
    let [calval,setcalval] = useState("");

    const onButtonClicked = (buttontext) => {
      if(buttontext === 'C'){
        setcalval("");
      }
      else if(buttontext === '='){
        const result = eval(calval);
        setcalval(result);
      }
      else{
        let newval = calval + buttontext;
        setcalval(newval);
      }
    }

    
  return (
    <>
     <div className={styles.calculator}>
      <Display displayValue = {calval}></Display>
      <ButtonContainer onButtonClicked = {onButtonClicked}></ButtonContainer>
     </div>
    </>
  )
}

export default App
