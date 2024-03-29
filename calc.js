// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

function calculator(a, b, operator) {
  if (operator === '+') {
    return a + b;
  } else if (operator === '-') {
    return a - b;
  } else if (operator === '*') {
    return a * b;
  } else if (operator === '/') {
    return a / b;
  } else {
    return 'unknown value';
  }
}

// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
  return str.split('').map(char => char + char).join('');
}

// Create a function to validate email and password.

function validate(email, password) {
  return /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/i.test(email) && /^[a-z0-9]{6,12}$/i.test(password);
}