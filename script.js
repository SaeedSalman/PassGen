function generateSingleSpecialPassphrase() {
    const descriptiveWords = ["bright", "swift", "grand", "noble", "kind", "brave"];
    const objectWords = ["eagle", "comet", "flower", "piano", "robot", "castle"];

    let descriptiveWord = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];
    let objectWord = objectWords[Math.floor(Math.random() * objectWords.length)];

    let passphrase = descriptiveWord + objectWord;

    // Ensure the combined length of words is at least 10 characters
    while (passphrase.length < 10) {
        descriptiveWord = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];
        objectWord = objectWords[Math.floor(Math.random() * objectWords.length)];
        passphrase = descriptiveWord + objectWord;
    }

    // Append a period and numbers
    passphrase += '.';
    let numDigitsRequired = 14 - passphrase.length;
    for (let i = 0; i < numDigitsRequired; i++) {
        passphrase += Math.floor(Math.random() * 10).toString();
    }

    return passphrase;
}

function generateAndShowPassphrase() {
    document.getElementById("passphraseOutput").innerText = generateSingleSpecialPassphrase();
}

function copyPassphrase() {
    const passphrase = document.getElementById("passphraseOutput").innerText;
    navigator.clipboard.writeText(passphrase);
}
