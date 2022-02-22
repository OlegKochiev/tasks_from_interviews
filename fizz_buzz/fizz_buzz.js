function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log('fizzBuzz');
        break;
      case i % 3 === 0:
        console.log('fizz');
        break;
      case i % 5 === 0:
        console.log('Buzz');
        break;
      default:
        console.log(i);
        break;
    }
  }
}

fizzBuzz(5);