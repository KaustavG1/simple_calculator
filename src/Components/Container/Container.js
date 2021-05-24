import React from 'react';
import './Container.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import { useSelector } from 'react-redux';

function Container(props) {
  // Get Theme value from store to change Calculator theme
  let themeValue = useSelector(state => state.ModeReducer.isDarkTheme);
  let keyTheme = themeValue ? "Dark" : "Light";
  
  return (
    <div className={`Container ${keyTheme}Container`}>
      <Display/>
      <Keypad />
    </div>
  );
}

export default Container;