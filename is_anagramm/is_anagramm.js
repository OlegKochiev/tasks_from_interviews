function anagram(string1, string2) {
  const stringWord1 = dropString(string1.toLowerCase());
  const stringWord2 = dropString(string2.toLowerCase());
  return checkStringWords(stringWord1, stringWord2);
}

function dropString(string) {
  const stringWord = {};
  for (let char of string) {
    stringWord[char] = stringWord[char] + 1 || 1;
  }
  console.log(stringWord);
  return stringWord;
}

function checkStringWords(stringWord1, stringWord2) {
  if (Object.keys(stringWord1).length !== Object.keys(stringWord2).length) {
    return false;
  }
  for (const char in stringWord1) {
    if (stringWord2.hasOwnProperty(char)) {
      if (stringWord1[char] !== stringWord2[char]) {
        return false
      }
    }
  }
  return true;
}

console.log(anagram('asd', 'das'));
console.log(anagram('finder', 'Friend'));
console.log(anagram('hello', 'bye'));