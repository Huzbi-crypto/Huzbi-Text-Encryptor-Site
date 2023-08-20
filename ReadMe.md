# Introduction

This is a project done in HTML5, CSS3, and JS that encrypts and decrypts your text by providing a text that you want to encrypt and a key which will generate that encryption.

## Instructions on Use 📜

» You can do `git clone` and clone the repo and open the `index.html` file to work.

## How Does it Work 🤔

The encryption and decryption is done in JS.

For the characters to be used to generate the text, it will be `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+=[SPACE-CHARACTER]`

### Encryption

The `encryptText` function starts by intializing an empty string called `encryptedText`. This string will be used to store the encrypted version of the input text.

The function then enters a `for` loop that iterates over each character in the input text. For each character in `text` argument, the function performs the following steps:

1. It retrieves the current character from the input text and stores it in a variable called `textChar`.
2. It retrieves the corresponding character from the key, using the `%` (modulo) operator to ensure that the key is repeated if it is shorter than the input text. This character is stored in a variable called `keyChar`.
3. It finds the index of both `textChar` and `keyChar` in an array called `characters`. These indices are stored in variables called `textIndex` and `keyIndex`, respectively.
4. If `textIndex` is not equal to -1, this means that the current character from the input text was found in the `characters` array. In this case, the function calculates a new index by adding `textIndex` and `keyIndex`, and then taking the result modulo the length of the `characters` array. This new index is used to retrieve a new character from the `characters` array, which is then appended to the `encryptedText` string.

After all the characters in the input text have been processed, the function returns the final encrypted text.

### Decryption

The `decryptText` function takes in two arguments: `encryptedText` and `key`. The `encryptedText` argument is the text that needs to be decrypted, and the `key` argument is the key used to decrypt the text.

The function starts by initializing an empty string called `decryptedText`. This string will be used to store the decrypted version of the input text.

The function the enters a `for` loop that iterates over each character in the input encrypted text. For each character, the function performs the following step:

1. It retrieves the current character from the input encrypted text and stores it in a variable called `encryptedChar`.
2. It retrieves the corresponding character from the key, using the modulo operator to ensure that the key is repeated if it is shorter than the input encrypted text. This character is stored in a variable called `keyChar`.
3. It finds the index of both `encryptedChar` and `keyChar` in an array called `characters`. These indices are stored in variables called `encryptedIndex` and `keyIndex`, respectively.
4. If `encryptedIndex` is equal to -1, this means that the current character from the input encrypted text was not found in the `characters` array. In this case, the function simply appends this character to the `decryptedText` string.
5. If `encryptedIndex` is not equal to -1, this means that the current character from the input encrypted text was found in the `characters` array. In this case, the function calculates a new index by subtracting `keyIndex` from `encryptedIndex`. If this new index is less than 0, it is incremented by th length of the `characters` array. This new index is less than 0, it is incremented by the length of the `characters` array. This new index is used to to retrieve a new character from the `characters` array, which is then appended to the `decryptedText` string.

After all characters in the input encrypted text have been processed, the function returns the final decrypted text.
