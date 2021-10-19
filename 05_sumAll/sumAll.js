const sumAll = function(firstNum, secondNum) {
    // start of with a zero sum
    let sum = 0;
    
    if (
        // if not numbers
        (!((typeof firstNum == 'number') && (typeof secondNum == 'number'))) ||
        // or if not greater than 0
        (!((firstNum >= 0) && (secondNum >= 0)))
        ) {
            // return an error
            return 'ERROR';
    }

    // decide where to start the count up
    if (firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }
    } else {
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
