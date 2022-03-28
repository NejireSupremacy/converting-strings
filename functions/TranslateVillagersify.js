const func = (string) => {
    const lettersGroup = {
        'Hmmmmmmmmm': 'a',
        'HmHmmmmmmm': 'b',
        'HmmHmmmmmm': 'c',
        'HmmmHmmmmm': 'd',
        'HmmmmHmmmm': 'e',
        'HmmmmmHmmm': 'f',
        'HmmmmmmHmm': 'g',
        'HmmmmmmmHm': 'h',
        'HmHmHmmmmm': 'i',
        'HmHmmmHmmm': 'j',
        'HmHmmmmHmm': 'k',
        'HmHmmmmmHm': 'l',
        'HmmHmHmmmm': 'm',
        'HmmHmmHmmm': 'n',
        'HmmHmmmHmm': 'o',
        'HmmHmmmmHm': 'p',
        'HmmmHmHmHm': 'q',
        'HmmmHmHmmm': 'r',
        'HmmmHmmHmm': 's',
        'HmmmHmmmHm': 't',
        'HmmmmHmHmm': 'u',
        'HmmmmHmmHm': 'v',
        'HmmHmmHmHm': 'w',
        'HmHmHmHmHm': 'x',
        'HmHmmmHmHm': 'y',
        'HmmHmHmmHm': 'z'
    };

    const wordsArray = string.split(' ');

    const regex = new RegExp('.{1,10}', 'g');
    const wordArray = new Array();
    for(let i = 0; i < wordsArray.length; i++) {
        wordArray.push(wordsArray[i]);
    };

    const newWordArray = new Array();
    for(let i = 0; i < wordArray.length; i++) {
        const letters = wordArray[i].match(regex);

        for(let j = 0; j < letters.length; j++) {
            const letter = letters[j];
            let newLetter;

            if(lettersGroup[letter]) newLetter = lettersGroup[letter];
            else newLetter = letter;

            newWordArray.push(newLetter);
        };
        newWordArray.push(' ');
    };

    const newString = newWordArray.join('');
    return newString;
};
module.exports = func;