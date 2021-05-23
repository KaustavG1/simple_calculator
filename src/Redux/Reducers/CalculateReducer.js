import { UPDATE, ADD, SUBTRACT, MULTIPLY, DIVIDE, CLEAR, EQUAL, SIGN, SQUARE, SQUARE_ROOT } from '../Actions/ActionConstants';

const initialState = {
  currentNumber: 0,
  previousNumber: 0,
  previousOperation: "num",
  pendingOperation: ""
};

function CalculateReducer(state = initialState, action) {
  let newResult = 0;
  switch (action.type) {
    case UPDATE:
      console.log(action.type);
      newResult = state.currentNumber === 0 || state.previousOperation !== "num" ? action.payload.data : state.currentNumber.toString() + action.payload.data;
      return {
        ...state, currentNumber: newResult, previousOperation: "num"
      };

    case ADD:
      console.log(action.type);
      if(state.previousOperation !== "operator") {
        if(state.pendingOperation === "+" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) + parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "-" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) - parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "*" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) * parseInt(state.currentNumber)).toString();
        }  else if(state.pendingOperation === "/" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) / parseInt(state.currentNumber)).toString();
        }
        
        return {
          ...state, currentNumber: newResult, previousNumber: newResult, previousOperation: "operator", pendingOperation: "+"
        }
      } 
      break;

    case SUBTRACT:
      console.log(action.type);
      if(state.previousOperation !== "operator") {
        if(state.pendingOperation === "+" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) + parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "-" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) - parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "*" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) * parseInt(state.currentNumber)).toString();
        }  else if(state.pendingOperation === "/" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) / parseInt(state.currentNumber)).toString();
        }
        
        return {
          ...state, currentNumber: newResult, previousNumber: newResult, previousOperation: "operator", pendingOperation: "-"
        }
      }
      break;

    case MULTIPLY:
      console.log(action.type);
      if(state.previousOperation !== "operator") {
        if(state.pendingOperation === "+" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) + parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "-" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) - parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "*" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) * parseInt(state.currentNumber)).toString();
        }  else if(state.pendingOperation === "/" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) / parseInt(state.currentNumber)).toString();
        }
        
        return {
          ...state, currentNumber: newResult, previousNumber: newResult, previousOperation: "operator", pendingOperation: "*"
        }
      }
      break;

    case DIVIDE:
      console.log(action.type);
      if(state.previousOperation !== "operator") {
        if(state.pendingOperation === "+" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) + parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "-" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) - parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "*" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) * parseInt(state.currentNumber)).toString();
        }  else if(state.pendingOperation === "/" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) / parseInt(state.currentNumber)).toString();
        }
        
        return {
          ...state, currentNumber: newResult, previousNumber: newResult, previousOperation: "operator", pendingOperation: "/"
        }
      }
      break;

    case CLEAR:
      console.log(action.type);
      return {
        ...state, currentNumber: 0, previousNumber: 0, previousOperation: "num"
      }

    case EQUAL:
      console.log(action.type);
      if(state.previousOperation !== "operator") {
        if(state.pendingOperation === "+" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) + parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "-" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) - parseInt(state.currentNumber)).toString();
        } else if(state.pendingOperation === "*" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) * parseInt(state.currentNumber)).toString();
        }  else if(state.pendingOperation === "/" || state.pendingOperation === "") {
          newResult = (parseInt(state.previousNumber) / parseInt(state.currentNumber)).toString();
        }
        
        return {
          ...state, currentNumber: newResult, previousNumber: 0, previousOperation: "operator", pendingOperation: ""
        }
      }
      break;

    case SIGN:
      console.log(action.type);
      newResult = state.currentNumber - (state.currentNumber * 2);
      
      return {
        ...state, currentNumber: newResult, previousNumber: 0, previousOperation: "operator", pendingOperation: ""
      }

    case SQUARE:
      console.log(action.type);
      newResult = (state.currentNumber * state.currentNumber);

      return {
        ...state, currentNumber: newResult, previousNumber: 0, previousOperation: "operator", pendingOperation: ""
      }

    case SQUARE_ROOT:
      console.log(action.type);
      newResult = Math.sqrt(state.currentNumber);

      return {
        ...state, currentNumber: newResult, previousNumber: 0, previousOperation: "operator", pendingOperation: ""
      }
      
    default:
      console.log(action.type);
      break;
  }
  return state;
}

export default CalculateReducer;