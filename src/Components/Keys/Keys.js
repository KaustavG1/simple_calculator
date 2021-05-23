import React from 'react';
import './Keys.css';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line 
import { update, addition, subtraction, multiplication, division, clearDisplay, equals, sign, square, squareRoot } from '../../Redux/Actions/Actions';

function Keys(props) {
  const dispatch = useDispatch();

  function handleClick(event) {
    if(typeof(props.text) !== 'string') {
      dispatch(update(props.text));
    } else {
      if(props.text === 'C') {
        dispatch(clearDisplay(props.text));
      } else if(props.text === '=') {
        dispatch(equals(props.text));
      } else if(props.text === '+') {
        dispatch(addition(props.text));
      } else if(props.text === '-') {
        dispatch(subtraction(props.text));
      } else if(props.text === '*') {
        dispatch(multiplication(props.text));
      } else if(props.text === '/') {
        dispatch(division(props.text));
      }
    }
    
  }

  return (
    <div className="Keys" onClick={handleClick}>
      {props.text}
    </div>
  );
}

export default Keys;