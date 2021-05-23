import React from 'react';
import './Container.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

function Container(props) {

  return (
    <div className="Container">
      <Display/>
      <Keypad />
    </div>
  );
}

export default Container;