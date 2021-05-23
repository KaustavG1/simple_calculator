import React from 'react';
import Keys from '../Keys/Keys';
import './Keypad.css';

const KEY_BUTTONS = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"];

function Keypad(props) {
  function drawKeys() {
    return KEY_BUTTONS.map(el => <Keys text={el} key={el}/>);
  }

  return (
    <div className="Keypad">
      {drawKeys()}
    </div>
  );
}

export default Keypad;