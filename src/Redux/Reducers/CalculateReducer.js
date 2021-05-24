import { UPDATE, ADD, SUBTRACT, MULTIPLY, DIVIDE, CLEAR, EQUAL, SIGN, SQUARE, SQUARE_ROOT } from '../Actions/ActionConstants';

// Initial Calculation state
const initialState = {
  currentNumber: 0,
  previousNumber: 0,
  previousOperation: "num",
  pendingOperation: ""
};

// Reacts to changes in Calculator Keypad
function CalculateReducer(state = initialState, action) {
  // Calculate pending operations
  function calculatePending() {
    if(state.pendingOperation === "+" || state.pendingOperation === "") {
      return (parseInt(state.previousNumber) + parseInt(state.currentNumber)).toString();
    } else if(state.pendingOperation === "-" || state.pendingOperation === "") {
      return (parseInt(state.previousNumber) - parseInt(state.currentNumber)).toString();
    } else if(state.pendingOperation === "*" || state.pendingOperation === "") {
      return (parseInt(state.previousNumber) * parseInt(state.currentNumber)).toString();
    } else if(state.pendingOperation === "/" || state.pendingOperation === "") {
      let temp = (parseInt(state.previousNumber) / parseInt(state.currentNumber)).toString();
      // Show 'Undefined Value' for divide by zero error
      if(isNaN(temp)) {
        return "Undefined Value";
      } else {
        return temp;
      }
    }
  }

  let newResult = 0;

  switch (action.type) {
    case UPDATE:
      // If currently displayed number is non zero or previous operation is number, append to the displayed number else replace it
      newResult = state.currentNumber === 0 || state.previousOperation !== "num" ? action.payload.data : state.currentNumber.toString() + action.payload.data;
      return {
        ...state, currentNumber: newResult, previousOperation: "num"
      };

    case ADD:
      if(state.previousOperation !== "operator") {
        newResult = calculatePending();
        return {
          ...state, currentNumber: newResult, previousNumber: newResult, previousOperation: "operator", pendingOperation: "+"
        }
      } 
      break;

    case SUBTRACT:
      if(state.previousOperation !== "operator") {
        newResult = calculatePending();        
        return {
          ...state, currentNumber: newResult, previousNumber: newResult, previousOperation: "operator", pendingOperation: "-"
        }
      }
      break;

    case MULTIPLY:
      if(state.previousOperation !== "operator") {
        newResult = calculatePending();        
        return {
          ...state, currentNumber: newResult, previousNumber: newResult, previousOperation: "operator", pendingOperation: "*"
        }
      }
      break;

    case DIVIDE:
      if(state.previousOperation !== "operator") {
        newResult = calculatePending();
        return {
          ...state, currentNumber: newResult, previousNumber: newResult, previousOperation: "operator", pendingOperation: "/"
        }
      }
      break;

    case CLEAR:
      return {
        ...state, currentNumber: 0, previousNumber: 0, previousOperation: "num"
      }

    case EQUAL:
      if(state.previousOperation !== "operator") {
        newResult = calculatePending();
        return {
          ...state, currentNumber: newResult, previousNumber: 0, previousOperation: "operator", pendingOperation: ""
        }
      }
      break;

    case SIGN:
      newResult = state.currentNumber - (state.currentNumber * 2);      
      return {
        ...state, currentNumber: newResult, previousNumber: 0, previousOperation: "operator", pendingOperation: ""
      }

    case SQUARE:
      newResult = (state.currentNumber * state.currentNumber);
      return {
        ...state, currentNumber: newResult, previousNumber: 0, previousOperation: "operator", pendingOperation: ""
      }

    case SQUARE_ROOT:
      // Show Immaginary Number while performing operations on negative numbers
      if(state.currentNumber > 0) {
        newResult = Math.sqrt(state.currentNumber);
      } else {
        newResult = "Immaginary number";
      }
      return {
        ...state, currentNumber: newResult, previousNumber: 0, previousOperation: "operator", pendingOperation: ""
      }
      
    default:
      break;
  }
  return state;
}

export default CalculateReducer;