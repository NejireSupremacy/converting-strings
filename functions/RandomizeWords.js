const func = (string) => {
    const arrayString = string.split(' ');
    let currentIndex = arrayString.length;
    let randomIndex;

    while(currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arrayString[currentIndex], arrayString[randomIndex]] = [arrayString[randomIndex], arrayString[currentIndex]];
    };

    const newString = arrayString.join(' ');
    return newString;
};
module.exports = func;