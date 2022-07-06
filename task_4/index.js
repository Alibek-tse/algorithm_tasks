function highestFrequency(array) {
  const obj = {};
  let count = 0;
  let res = "";
  array.forEach((item) => {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
    if (obj[item] > count) {
      count = obj[item];
      res = item;
    }
  });
  return res;
}

console.log(highestFrequency(["c", "a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(
  highestFrequency([
    "abc",
    "abc",
    "def",
    "def",
    "def",
    "ghi",
    "ghi",
    "ghi",
    "ghi",
  ])
); // -> ghi
