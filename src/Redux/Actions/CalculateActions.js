import { UPDATE, ADD, SUBTRACT, MULTIPLY, DIVIDE, CLEAR, EQUAL, SIGN, SQUARE, SQUARE_ROOT } from './ActionConstants';

// Action to update displayed number
function update(data) {
  return {
    type: UPDATE,
    payload: {
      data,
      operation: "num"
    }
  }
}

// Action to perform addition
function addition(data) {
  return {
    type: ADD,
    payload: {
      data,
      operation: "operator"
    }
  };
}

// Action to perform subtraction
function subtraction(data) {
  return {
    type: SUBTRACT,
    payload: {
      data,
      operation: "operator"
    }
  };
}

// Action to perform multiplication
function multiplication(data) {
  return {
    type: MULTIPLY,
    payload: {
      data,
      operation: "operator"
    }
  };
}

// Action to perform division
function division(data) {
  return {
    type: DIVIDE,
    payload: {
      data,
      operation: "operator"
    }
  };
}

// Action to clear the display and memory
function clearDisplay(data) {
  return {
    type: CLEAR,
    payload: {
      data,
      operation: "operator"
    }
  };
}

// Action to perform equals
function equals(data) {
  return {
    type: EQUAL,
    payload: {
      data,
      operation: "operator"
    }
  };
}

// Action to change sign of the displayed number
function sign(data) {
  return {
    type: SIGN,
    payload: {
      data,
      operation: "operator"
    }
  };
}

// Action to perform square of the displayed number
function square(data) {
  return {
    type: SQUARE,
    payload: {
      data,
      operation: "operator"
    }
  };
}

// Action to perform square root of the displayed number
function squareRoot(data) {
  return {
    type: SQUARE_ROOT,
    payload: {
      data,
      operation: "operator"
    }
  };
}

export { update, addition, subtraction, multiplication, division, clearDisplay, equals, sign, square, squareRoot };