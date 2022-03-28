const func = (string) => {
    const confussedEmoticons = ['(´･ω･`)?', '(・_・ヾ', '(●´ω｀●)ゞ', '(・∧‐)ゞ'];
    const embarassedEmoticons = ['(¬_¬”)', '(‘-’*)', '(・∧‐)ゞ', ':/'];
    const excitedEmoticons = ['(/^▽^)/', 'ヽ(*⌒∇⌒*)ﾉ', '(≧∇≦)/', 'o(≧∇≦o)'];

    const arrayString = string.split(' ');
    const uwufyWords = (word) => {
        const regex = new RegExp('[rl]', 'gi');
        let newWord = word.replace(regex, (match) => {
            if(match === match.toUpperCase()) return 'W';
            return 'w';
        });

        const random = Math.random() * 2;
        if(newWord.endsWith('...')) {
            if(random < 1) newWord = `${newWord} ${embarassedEmoticons[Math.floor(Math.random() * embarassedEmoticons.length)]}`;
        } else if(newWord.endsWith('?')) {
            if(random < 1) newWord = `${newWord} ${confussedEmoticons[Math.floor(Math.random() * confussedEmoticons.length)]}`;
        } else if(newWord.endsWith('!')) {
            if(random < 1) newWord = `${newWord} ${excitedEmoticons[Math.floor(Math.random() * excitedEmoticons.length)]}`;
        };

        return newWord;
    };

    const newString = new Array();
    for(const word of arrayString) {
        newString.push(uwufyWords(word));
    };

    return newString.join(' ');
};
module.exports = func;