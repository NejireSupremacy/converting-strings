const convertString = (str, type) => {
    if(!str) throw new Error(`You are not defining the text to convert.`);
    if(!type) throw new Error(`You are not defining the type of conversion.`);

    if(typeof(str) !== 'string') throw new Error(`The text you are defining is not a string.`);
    if(typeof(type) !== 'string') throw new Error(`The type of conversion you are defining is not a string.`);

    let func;
    try {
        func = require(`./functions/${type}`);
    } catch(err) {
        throw new Error(`The type of conversion you are defining is not valid.`) 
    };
    return func(str);
};

module.exports = convertString;
