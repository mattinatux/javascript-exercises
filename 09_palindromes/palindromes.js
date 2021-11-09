const palindromes = function (word) {
    // 1. remove all punctuation AND spaces from input AND convert to lower
    const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const strippedWordLower = word.replace(punctuation, '').replace(/ /g, '').toLowerCase();
    // 3. reverse the order and store in a new variable
    const strippedReverse = ((Array.from(strippedWordLower)).reverse()).join('');
    // 4. compare variables -- if ===, then return true; if !==, then return false
    return strippedWordLower === strippedReverse;
};

// Do not edit below this line
module.exports = palindromes;
