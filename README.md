# Converting Strings
Converting Strings is a project which was made to create unusable conversions of various strings.

# Usage
This module has only one function, which accepts two parameters: `str` (text to modify) and `type` (type of modification).

**Some modifiers may have multiple conversions depending on the text.**

## Example of use
```js
const ConvertingStrings = require('converting-strings');

const convertedString = ConvertingStrings('Hello, world!', 'uwufy');
console.log(convertedString); // Output: Hewwo, wowwd! (/^▽^)/
```

## Type of convertions
|Type|Description|
|---|---|
| Cheemsify | Cheemsify the given text. |
| Emojify | Turn given text into emojis (can be quite buggy). |
| InvertWords | Reverse the words of the given text. |
| Isisify | Replace all vowels with the letter i. |
| RandomizeLetters | Randomize the position of the letters of each word in the given text. |
| RandomizeWords | Randomize the position of words in the given text. |
| TranslatableVillagersify | Villagersify the given text (translatable). |
| TranslateVillagersify | Translate the villagersify text (this only with the one that is translatable). |
| Uwufy | Uwusify the given text. |
| Villagersify | Villagersify the given text (simpler but not translatable) |

# Credits

- [ThisIsAName](https://github.com/NejireSupremacy) (Main developer)
- [Google](https://www.google.com/) (Professional troubleshooter)