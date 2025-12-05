//1
const containsChar = (string, symbol) => {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === symbol) {
      return true;
    }
  }
  return false;
};

//2
const reverse = (inputString) => {
  let reversed = "";
  let position = inputString.length - 1;

  while (position >= 0) {
    reversed += inputString[position];
    position--;
  }

  return reversed;
};

//3
const wordsToRegister = (text) => {
  let output = "";

  for (let i = 0; i < text.length; i++) {
    const symbol = text[i];

    if (i % 2 === 0) {
      output += symbol.toLowerCase();
    } else {
      output += symbol.toUpperCase();
    }
  }

  return output;
};

//4
const sumOfDigitsInString = (string) => {
  let total = 0;

  for (let position = 0; position < string.length; position++) {
    const currentChar = string[position];

    if (currentChar >= "0" && currentChar <= "9") {
      total = total + Number(currentChar);
    }
  }

  return total;
};

//5
const checkChars = (string, targetSymbol, replacementSymbol) => {
  let hasTarget = false;
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === targetSymbol) {
      newString += replacementSymbol;
      hasTarget = true;
    } else {
      newString += string[i];
    }
  }

  if (hasTarget === false) {
    return 'Error';
  }

  return newString;
};
