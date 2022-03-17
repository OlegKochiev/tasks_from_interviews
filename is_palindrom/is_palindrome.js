function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('giggig2'));
console.log(isPalindrome('giggiwer334'));
