function rollTheDice(userName, maxOfTries) {
    var results = [];
    // We don't need to specify type number if we initializethe var to a number
    var MAX_DICE_NUMBER = 6;
    for (var index = 0; index < maxOfTries; index++) {
        var result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
        if (result === MAX_DICE_NUMBER) {
            results.push(userName + " is a WINNER");
        }
        else {
            results.push(userName + " is a LOSER");
        }
    }
    return results;
}
var results = rollTheDice('Typescript', 2);
console.log(results);
