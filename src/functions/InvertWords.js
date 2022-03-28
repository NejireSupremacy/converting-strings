const func = (string) => {
    const stringArray = [];
    for(const word of string.split(' ')) {
        stringArray.push(word);
    };

    const newString = stringArray.reverse().join(' ');
    return newString;
};
module.exports = func;