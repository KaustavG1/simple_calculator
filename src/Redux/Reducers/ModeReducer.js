import { THEME, MODE } from '../Actions/ActionConstants';

const initialState = {
  isDarkTheme: false,
  isScientificMode: false
}

// Reacts to changes in the Calculator Modes and Theme
function ModeReducer(state = initialState, action) {
  switch (action.type) {
    case THEME:
      if(!state.isDarkTheme) {
        return { ...state, isDarkTheme: true };
      } else {
        return { ...state, isDarkTheme: false};
      }

    case MODE:
      if(!state.isScientificMode) {
        return { ...state, isScientificMode: true };
      } else {
        return { ...state, isScientificMode: false };
      }

    default:
      break;
  }

  return state;
}

export default ModeReducer;