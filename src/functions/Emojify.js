const func = (string) => {
    const regexLetters = new RegExp('[a-z]', 'i');
    const regexNumber = new RegExp('[0-9]', 'i');

    const newArrayString = [];
    for(let i = 0; i < string.length; i++) {
        const letter = string[i];
        const charCode = letter.toLowerCase().charCodeAt(0);

        if(letter.match(regexLetters)) {
            const number = charCode - 97;
            const emoji = String.fromCodePoint(0xD83C, 56806 + number);

            newArrayString.push(emoji);
        } else if(letter.match(regexNumber)) {
            const number = charCode - 48;
            const emoji = String.fromCodePoint('0x003' + number, 0xFE0F, 0x20E3);

            newArrayString.push(emoji);
        } else {
            newArrayString.push(letter);
        };
    };

    const newString = newArrayString.join('');
    return newString;
};
module.exports = func;