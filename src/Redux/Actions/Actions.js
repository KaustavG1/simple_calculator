import { UPDATE, ADD, SUBTRACT, MULTIPLY, DIVIDE, CLEAR, EQUAL, SIGN, SQUARE, SQUARE_ROOT } from './ActionConstants';

function update(data) {
  return {
    type: UPDATE,
    payload: {
      data,
      operation: "num"
    }
  }
}

function addition(data) {
  return {
    type: ADD,
    payload: {
      data,
      operation: "operator"
    }
  };
}

function subtraction(data) {
  return {
    type: SUBTRACT,
    payload: {
      data,
      operation: "operator"
    }
  };
}

function multiplication(data) {
  return {
    type: MULTIPLY,
    payload: {
      data,
      operation: "operator"
    }
  };
}

function division(data) {
  return {
    type: DIVIDE,
    payload: {
      data,
      operation: "operator"
    }
  };
}

function clearDisplay(data) {
  return {
    type: CLEAR,
    payload: {
      data,
      operation: "operator"
    }
  };
}

function equals(data) {
  return {
    type: EQUAL,
    payload: {
      data,
      operation: "operator"
    }
  };
}

function sign(data) {
  return {
    type: SIGN,
    payload: {
      data,
      operation: "operator"
    }
  };
}

function square(data) {
  return {
    type: SQUARE,
    payload: {
      data,
      operation: "operator"
    }
  };
}

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