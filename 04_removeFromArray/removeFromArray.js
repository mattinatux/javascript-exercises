const removeFromArray = function(myArray, ...popValues) {
    
    // start the loop, to go through each of the values that should be removed
    for (let i = 0; i < popValues.length; i++) {
        
        // check to see if the array contains that value (was thinking from powershell contains method)
        if (myArray.includes(popValues[i])) {

            // get the index position from the array of that specific item
            let index = myArray.indexOf(popValues[i]);
            
            // use the splice method to (set the cursor at index position, delete this many chars following
            // that index position (, not included: splice in some specific chars here, thus resulting in just a deletion))
            myArray.splice(index, 1);
        }
    }

    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
