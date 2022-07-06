function isUnique(string) {
  return new Set(string).size === string.length ? true : false;
}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false
