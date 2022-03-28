const func = (string) => {
    const letters = {
        'a': 'Hmmmmmmmmm',
        'á': 'Hmmmmmmmmm',
        'b': 'HmHmmmmmmm',
        'c': 'HmmHmmmmmm',
        'd': 'HmmmHmmmmm',
        'e': 'HmmmmHmmmm',
        'é': 'HmmmmHmmmm',
        'f': 'HmmmmmHmmm',
        'g': 'HmmmmmmHmm',
        'h': 'HmmmmmmmHm',
        'i': 'HmHmHmmmmm',
        'í': 'HmHmHmmmmm',
        'j': 'HmHmmmHmmm',
        'k': 'HmHmmmmHmm',
        'l': 'HmHmmmmmHm',
        'm': 'HmmHmHmmmm',
        'n': 'HmmHmmHmmm',
        'o': 'HmmHmmmHmm',
        'ó': 'HmmHmmmHmm',
        'p': 'HmmHmmmmHm',
        'q': 'HmmmHmHmHm',
        'r': 'HmmmHmHmmm',
        's': 'HmmmHmmHmm',
        't': 'HmmmHmmmHm',
        'u': 'HmmmmHmHmm',
        'ú': 'HmmmmHmHmm',
        'v': 'HmmmmHmmHm',
        'w': 'HmmHmmHmHm',
        'x': 'HmHmHmHmHm',
        'y': 'HmHmmmHmHm',
        'z': 'HmmHmHmmHm',
    };

    const newArrayString = [];
    for(let i = 0; i < string.length; i++) {
        const regex = new RegExp(`[${string[i]}]`, 'gi');

        if(Object.keys(letters).some((e) => regex.test(e))) {
            newArrayString.push(letters[string[i].toLowerCase()]);
        } else {
            newArrayString.push(string[i]);
        }
    };

    const newString = newArrayString.join('');
    return newString;
};
module.exports = func;