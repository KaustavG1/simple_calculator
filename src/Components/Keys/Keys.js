import React from 'react';
import './Keys.css';
import { useDispatch, useSelector } from 'react-redux';
import { update, addition, subtraction, multiplication, division, clearDisplay, equals, sign, square, squareRoot } from '../../Redux/Actions/CalculateActions';

function Keys(props) {
  const dispatch = useDispatch();
  
  // Get the current Theme Value from store
  let themeValue = useSelector(state => state.ModeReducer.isDarkTheme);
  let keyTheme = themeValue ? "Dark" : "Light";

  // Handle Calculator Key click events
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
      }else if(props.text === '+/-') {
        dispatch(sign(props.text));
      } else if(props.text === 'SQ(x)') {
        dispatch(square(props.text));
      } else if(props.text === 'SQRT(x)') {
        dispatch(squareRoot(props.text));
      } else {
        console.log("ERROR!");
      }
    }    
  }

  return (
    <div className={`Keys ${keyTheme}Keys`} onClick={handleClick}>
      {props.text}
    </div>
  );
}

export default Keys;