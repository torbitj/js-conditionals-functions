const isOdd = (number) => {
  if (number % 2 === 1 || number % 2 === -1) {
    return `That's an odd number!`
  }
  return `That's an even better number!`
}

const userInput = () => {
  const numberStr = prompt(`Enter a number`);
  const isNumber = isNaN(numberStr);

  if (!isNumber) {
    const number = Number(numberStr);
    const message = isOdd(number);
    return message
  }
  alert(`That is not a number, please try again!`)
  userInput();
}

alert(userInput());