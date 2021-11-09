const fibonacci = function(int) {
    int = Number(int);

    if (int < 0) {
        return "OOPS";
    }

    let fibArray = [0, 1];
    let sum;

    for (let i = 0; i < (int-1); i++) {
        sum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
        fibArray.push(sum);
    }

    return fibArray[int];
};

// Do not edit below this line
module.exports = fibonacci;




// 1. calculate the number that is that far in
//     Keep adding the last two digits in the array in a loop until reaching the INPUT int
//     (0) + 1 = 1
//     1 + 1 = 2
//     2 + 2 = 3
//     2 + 3 = 5

//     Iteration 1: So we start at 0, then add 1. =1
//     Iteration 2: Then read the new array and take the last two items (1 + 1). =2
//     Iteration 3: Then read the array and take the last two items (1 = 2). =3
//     . . .


// EX: Accessing the last array element
// fruits[fruits.length - 1];
//     // fruits.length = count of array items starting at 1
//     // beacause index starts at 0, must subtract 1 to get LAST item