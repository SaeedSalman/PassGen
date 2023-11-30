// script.js

function generateSingleSpecialPassphrase(numWords = 3) {
    const shorterWords = ["cat", "sun", "moon", "fish", "car", "ball", "star", "sky"];
    let selectedWords = [];
    while (selectedWords.length < numWords) {
        let word = shorterWords[Math.floor(Math.random() * shorterWords.length)];
        if (!selectedWords.includes(word)) {
            selectedWords.push(word);
        }
    }

    let passphrase = selectedWords.join('');
    const specialChars = "$?&@!";
    passphrase += specialChars[Math.floor(Math.random() * specialChars.length)];
    
    while (passphrase.length < 14) {
        passphrase += Math.floor(Math.random() * 10).toString();
    }

    return passphrase.charAt(0).toUpperCase() + passphrase.slice(1);
}

function generateAndShowPassphrase() {
    document.getElementById("passphraseOutput").innerText = generateSingleSpecialPassphrase();
}

function copyPassphrase() {
    const passphrase = document.getElementById("passphraseOutput").innerText;
    navigator.clipboard.writeText(passphrase);
}

