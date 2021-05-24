import { THEME, MODE } from './ActionConstants';

// Action to change Theme
function changeTheme() {
  return {
    type: THEME,
  }
}

// Action to change Mode
function changeMode() {
  return {
    type: MODE,
  };
}

export { changeTheme, changeMode };