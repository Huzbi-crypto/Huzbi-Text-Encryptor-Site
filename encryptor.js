const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+= ";

// Encryption Function: will encrypt the text using the key which is used to generate the encrypted text
function encryptText(text, key) {
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        const textChar = text[i];
        const keyChar = key[i % key.length];

        const textIndex = characters.indexOf(textChar);
        const keyIndex = characters.indexOf(keyChar);

        if (textIndex === -1) {
            encryptText += textChar;
        } else {
            const newIndex = (textIndex + keyIndex) % characters.length;
            encryptedText += characters[newIndex];
        }
    }

    return encryptedText;
}

// Decryption Function: will decrypt the encrypted text using the key which is used to generate the decrypted text
function decryptText(encryptedText, key) {
    let decryptedText = "";

    for (let i = 0; i < encryptedText.length; i++) {
        const encryptedChar = encryptedText[i];
        const keyChar = key[i % key.length];

        const encryptedIndex = characters.indexOf(encryptedChar);
        const keyIndex = characters.indexOf(keyChar);

        if (encryptedText === -1) {
            decryptedText += encryptedChar;
        } else {
            let newIndex = encryptedIndex - keyIndex;
            if (newIndex < 0) newIndex += characters.length;
            decryptedText += characters[newIndex];
        }
    }

    return decryptedText;
}

// Update result based on selected operation (enc or dec)
function updateResult(isEncrypting) {
    const text = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    let result = "";

    if (isEncrypting) {
        result = encryptText(text, key);
    } else {
        result = decryptText(text, key);
    }

    document.getElementById("result").textContent = result;
}

// Add event listeners to buttons
document.getElementById("enc-btn").addEventListener('click', function () {
    updateResult(true);
});

document.getElementById("dec-btn").addEventListener('click', function () {
    updateResult(false);
});

// Show the encrypted result when the page is opened or reloaded.
document.addEventListener('DOMContentLoaded', () => {
    updateResult(true);
});