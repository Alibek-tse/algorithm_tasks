function flatten(array) {
  return array.reduce((acc, item) => {
    return [...acc, ...Array.isArray(item) ? flatten(item) : [item]];
  }, []);
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
