function isStringRotated(source, test) {
  if (source.length !== test.length) {
    return false;
  }
  let count = 0;
  source.split("").forEach((item, index) => {
    if (test.indexOf(item) === -1 || source.indexOf(test[index]) === -1) {
      count++;
    }
  });
  return count > 0 ? false : true;
}

console.log(isStringRotated("javascript", "scriptjava")); // -> true
console.log(isStringRotated("javascript", "iptjavascr")); // -> true
console.log(isStringRotated("javascript", "java")); // -> false
