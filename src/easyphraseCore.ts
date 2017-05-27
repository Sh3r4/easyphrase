
function getRandom(max: number, adjust: number): number {
    return (Math.floor(Math.random() * max) + adjust)
}

function shuffle(unshuffledArray: Array<string>): Array<string> {
    //TODO: Perform a Fisher-Yates Shuffle of the array
    let shuffled = unshuffledArray;

    for (let index = unshuffledArray.length - 1; index > 0; index--) {

        let newPos: number = getRandom(index, 0);

        let swap = shuffled[index];
        shuffled[index] = shuffled[newPos];
        shuffled[newPos] = swap;

    }
    return shuffled;
}

function generateDie(): string {
    let roll = <string><any>getRandom(6, 1);
    return roll;
}

function generateWordId(): number {

    // roll 5 dice
    let rolls: string[] = [];
    for (let dice = 0; dice < 5; dice++) {
        rolls.push(generateDie())
    }

    // shuffle the dice
    rolls = shuffle(rolls);

    // build the query number
    let querystring: string = "";
    rolls.forEach(element => {
        querystring = querystring + element;
    });
    return parseInt(querystring);
}

function getWord(queryId: number): string {

    // retrieve the word
    let word: string = "";
    let effWords = getWords();
    for (let index = 0; index < effWords.length; index++) {
        let element = effWords[index];
        if (element.id === queryId) {
            word = element.word;
            break;
        }
    }
    return word;
}

function generatePass(quantity: number = 1, lessSec: boolean = false): void {

    // iterate for the given number of passwords
    for (var index = 0; index < quantity; index++) {
        let rollOutput: string = "";

        // Get 6 words
        let words: Array<string> = [];
        for (let count = 0; count < 6; count++) {
            // roll the dice
            let id = generateWordId();
            rollOutput = rollOutput + id + '; ';
            words.push(getWord(id));
        }

        // shuffle the words for extra randomness
        words = shuffle(words);

        // generate
        let pw: string = "";
        let wordsOutput: string = "";
        words.forEach(word => {
            pw = pw + word;
            wordsOutput = wordsOutput + ', ' + word;
        });

        // remove the first comma
        if (wordsOutput.match(/,.*,/)) { // Check if there are 2 commas
            wordsOutput = wordsOutput.replace(',', ''); // Remove the first one
        }

        if (!lessSec) {
            // Throw in a number to foil dictionary brute forcing based on the list -- because paranoia
            let antiDict = <string><any>getRandom(9, 1);
            let antiDictPos = getRandom(pw.length, 0);
            pw = [pw.slice(0, antiDictPos), antiDict, pw.slice(antiDictPos)].join('');
        }

        // Output verbose statements for user engagement
        if (!silent) {
            appendOutput("ROLLING!");
            appendOutput('Dice Roll Results:  ' + rollOutput);
            appendOutput('Rolls Generated these words:  ' + wordsOutput);
            appendOutput("Your new password is:")
        }
        appendOutput(pw);
    }
}

