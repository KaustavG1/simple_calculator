import React from 'react';
import './Display.css'
import { useSelector } from 'react-redux';

function Display(props) {
  return (
    <div className="Display">
      {useSelector(state => state.CalculateReducer.currentNumber)}
    </div>
  );
}

export default Display;