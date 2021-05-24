import React from 'react';
import Keys from '../Keys/Keys';
import './Keypad.css';
import { useSelector } from 'react-redux';

// Keypad Constants definition
const KEY_BUTTONS = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"];

function Keypad(props) {
  // Get Calculator Mode value from store
  let modeValue = useSelector(state => state.ModeReducer.isScientificMode);

  function drawKeys() {
    // Add Sign, Square and Square Root buttons based on calculator mode
    if(modeValue) {
      return [...KEY_BUTTONS, "+/-", "SQ(x)", "SQRT(x)"].map(el => <Keys text={el} key={el}/>);
    } else {
      return KEY_BUTTONS.map(el => <Keys text={el} key={el}/>);
    }
  }

  return (
    <div className="Keypad">
      {drawKeys()}
    </div>
  );
}

export default Keypad;