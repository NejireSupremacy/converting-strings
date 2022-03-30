# Converting Strings
Converting Strings is a project that was made to facilitate various string conversions.

# Usage
This module has only one function available, which accepts two parameters: `str` (text to be modified) and `type` (type of modification).

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
| Emojify | Converts a given text into emojis (can be quite buggy). |
| InvertWords | Invert the words of the given text. |
| Isify | Replace all vowels with the letter i. |
| RandomizeLetters | Randomize the position of the letters of each word in the given text. |
| RandomizeWords | Randomize the position of words in the given text. |
| TranslatableVillagerify | Villagerify the given text (translatable). |
| TranslateVillagerify | Translate the villagerified text. |
| Uwufy | Uwufy the given text. |
| Villagerify | Villagerify the given text (simpler but not translatable) |

# Credits

- [ThisIsAName](https://github.com/NejireSupremacy) (Main developer)
- [Google](https://www.google.com/) (Professional troubleshooter)