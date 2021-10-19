const repeatString = function(string, num) {
    let stringNotAnArray = '';

    if (num < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            stringNotAnArray += string;
        }
    }

    return stringNotAnArray;
};

// Do not edit below this line
module.exports = repeatString;
