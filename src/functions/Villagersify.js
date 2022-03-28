const func = (string) => {
    const regexUpperCase = new RegExp('[A-Z]', 'g');
    const regexLowerCase = new RegExp('[a-z]', 'g');
    
    let replacedString;
    replacedString = string.replace(regexUpperCase, 'H');
    replacedString = replacedString.replace(regexLowerCase, 'm');

    const arrayString = replacedString.split(' ');

    const newString = new Array();
    for(const word of arrayString) {
        const newWord = 'H' + word.substring(1);
        newString.push(newWord);
    };

    return newString.join(' ');
};
module.exports = func;