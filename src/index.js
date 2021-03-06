const typeFunctions = {
    cheemssify: require('./functions/Cheemssify'),
    emojify: require('./functions/Emojify'),
    invertwords: require('./functions/InvertWords'),
    isify: require('./functions/Isify'),
    randomizeletters: require('./functions/RandomizeLetters'),
    randomizewords: require('./functions/RandomizeWords'),
    translatablevillagersify: require('./functions/TranslatableVillagersify'),
    translatevillagersify: require('./functions/TranslateVillagersify'),
    uwufy: require('./functions/Uwufy'),
    villagersify: require('./functions/Villagersify')
};

const convertString = (str, type) => {
    if(!str) throw new Error(`You are not defining the text to convert.`);
    if(!type) throw new Error(`You are not defining the type of conversion.`);

    if(typeof(str) !== 'string') throw new Error(`The text you are defining is not a string.`);
    if(typeof(type) !== 'string') throw new Error(`The type of conversion you are defining is not a string.`);

    const func = typeFunctions[type.toLowerCase()];
    if(!func) throw new Error(`The type of conversion you are defining is not valid.`);
    
    return func(str);
};

module.exports = convertString;
