import React from 'react';
import './Display.css'
import { useSelector } from 'react-redux';

function Display(props) {
  // Get Current Number from store
  let displayedNumber = useSelector(state => state.CalculateReducer.currentNumber);

  // Get length of displayed Number and change font size based on it
  let len = displayedNumber.toString().length;
  console.log(len);
  // Default font size is 28
  let fs = 28;  
  if(len > 21) fs = 20;
  if(len > 30) fs = 16;  
  if(len > 35) fs = 12;

  return (
    <div className="Display" style={{fontSize: `${fs}px`}}>
      {displayedNumber}
    </div>
  );
}

export default Display;