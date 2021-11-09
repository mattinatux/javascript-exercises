const findTheOldest = function(people) {
    let date = new Date();

    const orderedList = people.sort(function (firstPerson, secondPerson) {
        firstPerson.yearOfDeath = firstPerson.yearOfDeath || 
            ( date.getFullYear() );

        secondPerson.yearOfDeath = secondPerson.yearOfDeath || 
            ( date.getFullYear() );    

        if ((firstPerson.yearOfDeath - firstPerson.yearOfBirth) > (secondPerson.yearOfDeath - secondPerson.yearOfBirth)) {
            return -1; //
        } else {
            return 1;
        }
    });

    return orderedList[0];
};

// Do not edit below this line
module.exports = findTheOldest;