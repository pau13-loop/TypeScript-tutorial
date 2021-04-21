function rollTheDice(userName: string, maxOfTries: number){
    
    const results: string[] = [];
    // We don't need to specify type number if we initializethe var to a number
    let MAX_DICE_NUMBER = 6;

    for (let index = 0; index < maxOfTries; index++) {
        const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);

        if (result === MAX_DICE_NUMBER) {
            results.push(`${userName} is a WINNER`);
        } else {
            results.push(`${userName} is a LOSER`);
        }
    }

    return results;
}

const results = rollTheDice('Typescript', 2);

console.log(results);