const func = (string) => {
    const regexUpperCaseVowels = new RegExp('[AEIOU]', 'g');
    const regexLowerCaseVowels = new RegExp('[aeiou]', 'g');
    
    let newString;
    newString = string.replace(regexUpperCaseVowels, 'I');
    newString = newString.replace(regexLowerCaseVowels, 'i');

    return newString;
};
module.exports = func;