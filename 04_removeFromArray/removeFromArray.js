const removeFromArray = function (array, ...args) {
  const result = array.filter((item) => {
    return !args.includes(item);
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
