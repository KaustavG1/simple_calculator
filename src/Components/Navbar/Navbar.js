import React from 'react';
import './Navbar.css';
import { changeTheme, changeMode } from '../../Redux/Actions/ModeActions';
import { useDispatch, useSelector } from 'react-redux';

function Navbar(props) {
  const dispatch = useDispatch();

  // Handle click event for Mode change
  function handleModeChange(e) {
    dispatch(changeMode());
  }

  // Handle click event for Theme change
  function handleThemeChange(e) {
    dispatch(changeTheme());
  }

  // Get Mode and Theme values from store
  let modeValue = useSelector(state => state.ModeReducer.isScientificMode);
  let themeValue = useSelector(state => state.ModeReducer.isDarkTheme);

  // Render Mode button name dynamically based on store value
  function modeButtonName() {
    if(modeValue) {
      return "Basic Mode";
    } else {
      return "Scientific Mode";
    }
  }

  // Render Theme button name dynamically based on store value
  function themeButtonName() {
    if(themeValue) {
      return "Light Theme";
    } else {
      return "Dark Theme";
    }
  }

  return (
    <nav className="Navbar">
      <div className="container">
        <span className="header">Simple Calculator</span>
        <div className="options">
          <span className="mode-switch" onClick={handleModeChange}><h4>{modeButtonName()}</h4></span>
          <span className="theme-switch" onClick={handleThemeChange}><h4>{themeButtonName()}</h4></span>
        </div>           
      </div>
    </nav>
  );
}

export default Navbar;