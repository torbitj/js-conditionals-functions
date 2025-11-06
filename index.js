const isOdd = (number) => {
  if (number % 2 === 1) {
    return `That's an odd number!`
  }
  return `That's an even number!`
}

const userInput = () => {
  const numberStr = prompt(`Enter a number`);
  const isNumber = isNaN(numberStr);

  if (!isNumber) {
    const number = Number(numberStr);
    const message = isOdd(number);
    return message
  }
}

console.log(userInput())