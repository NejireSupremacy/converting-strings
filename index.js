const convertString = (str, type) => {
    if(!str) throw new Error(`You are not defining the text to convert.`);
    if(!type) throw new Error(`You are not defining the type of conversion.`);

    if(typeof(str) !== 'string') throw new Error(`The text you are defining is not a string.`);
    if(typeof(type) !== 'string') throw new Error(`The type of conversion you are defining is not a string.`);

    const func = require(`./functions/${type}`);
    return func(str);
};

module.exports = convertString;
