const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

// const totalYears = inventors.reduce((total, inventor) => {
//   return total + (inventor.passed - inventor.year);
//   }, 0);
// console.log(totalYears);

// const sum = sum.reduce(function(a, b) {
// 	return a + b;
// }, 0);

const sum = function(values) {
  return values.reduce(function (a, b) {
    return a + b;
  }, 0);
  // I had a hard time with this one. I had it ALMOST right from the start.
  // I was missing the need to return "values.reduce....", thinking it would return from
  // within the nested reduce, but that didn't work because of scoping (I think)
  // as an arrow with inherent: // return values.reduce((a,b) => a + b, 0);
};

const multiply = function(values) {
  return values.reduce(function (a, b) {
    return a * b;
  }, 1); // setting initial value to "1" here is necessary because we are multiplying.
        // if you set it to 0, like you'd do with addition, it will multiply everything by 0 at the end
        // which means you will end up with 0
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
