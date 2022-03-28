# Converting Strings
Converting Strings is a project which was made to create unusable conversions of various strings.

# Usage
This module has only one function, which accepts two parameters: `str` (text to modify) and `type` (type of modification).

**Some modifiers may have multiple conversions depending on the text.**

## Type of convertions
|Type|Description|
|---|---|
| Cheemsify | Cheemsify the text. |
| RandomizeWords | Randomize the position of words in a sentence. |
| TranslatableVillagersify | Villagersify the given text (translatable). |
| TranslateVillagersify | Translate the villagersify text (this only with the one that is translatable). |
| Uwusify | Uwusify the given text|
| Villagersify | Villagersify the given text (simpler but not translatable) |

## Example of use
```js
const ConvertingStrings = require('converting-strings');

const convertedString = ConvertingStrings('Hello, world!', 'uwusify');
console.log(convertedString); // Output: Hewwo, wowwd! (/^▽^)/
```

# Credits

- [ThisIsAName](https://github.com/NejireSupremacy) (Main developer)
- [Google](https://www.google.com/) (Professional troubleshooter)