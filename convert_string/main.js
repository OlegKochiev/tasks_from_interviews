function contcanStrings(...args) { // My answer
  if (args.length < 2) {
    console.log("Not enough arguments!"); // Недостаточно аргументов.
  } else {
    let separator = args[0];
    args.shift();
    let string = args.join(separator);
    return string;
  }
  return false;
}

function getStr() { // Answer
  return [].slice.call(arguments, 1).join(arguments[0])
}
console.log(getStr('+', 'num1', 'num2', 'num3'));
console.log(contcanStrings('+', 'num1', 'num2', 'num3'));