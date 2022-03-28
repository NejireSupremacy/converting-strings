const func = (string) => {
    const regex = new RegExp('[aeiou]', 'gi');
    const newString = string.replace(regex, (match, i) => {
        const nextLetter = string.charAt(i + 1).toLowerCase();
        
        if(match === nextLetter || nextLetter === 'm' || nextLetter === 'n') return match;
        return match + 'm';
    });
    return newString;
};
module.exports = func;