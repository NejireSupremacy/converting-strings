const func = (string) => {
    const arrayString = string.split(' ');
    const newArrayString = [];

    for(let i = 0; i < arrayString.length; i++) {
        const word = arrayString[i].split('');
        let currentIndex = word.length;
        let randomIndex;

        while(currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [word[currentIndex], word[randomIndex]] = [word[randomIndex], word[currentIndex]];
        };
        newArrayString.push(word.join(''));
    }

    const newString = newArrayString.join(' ');
    return newString;
};
module.exports = func;