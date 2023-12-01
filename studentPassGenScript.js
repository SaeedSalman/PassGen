// studentPassGenScript.js

function generateSingleSpecialPassphrase() {
    const shorterWords = ["cat", "sun", "moon", "fish", "car", "ball", "star", "sky"];
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];

    let word = shorterWords[Math.floor(Math.random() * shorterWords.length)];
    let color = colors[Math.floor(Math.random() * colors.length)];

    let coloredWord = color + word; 
    const specialChars = ".";
    coloredWord += specialChars[Math.floor(Math.random() * specialChars.length)];

    coloredWord += Math.floor(Math.random() * 10).toString();

    while (coloredWord.length < 8) {
        coloredWord += Math.floor(Math.random() * 10).toString();
    }

    return coloredWord; 
}


function generateAndShowPassphrase() {
    document.getElementById("passphraseOutput").innerText = generateSingleSpecialPassphrase();
}

function copyPassphrase() {
    const passphrase = document.getElementById("passphraseOutput").innerText;
    navigator.clipboard.writeText(passphrase);
}


function generateUniquePassword(existingPasswords) {
    let newPassword;
    do {
        newPassword = generateSingleSpecialPassphrase();
    } while (existingPasswords.includes(newPassword));
    return newPassword;
}

function generateAndDownloadPasswords() {
    let passwords = new Set(); // Using a Set to ensure uniqueness
    while (passwords.size < 200) {
        let uniquePassword = generateUniquePassword(Array.from(passwords));
        passwords.add(uniquePassword);
    }

    let blob = new Blob([Array.from(passwords).join('\n')], { type: 'text/plain' });
    let url = window.URL.createObjectURL(blob);

    let a = document.createElement('a');
    a.href = url;
    a.download = 'passwords.txt';
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    a.remove();
}

function generateAndDownloadCSV() {
    let passwords = new Set();
    while (passwords.size < 200) {
        let uniquePassword = generateUniquePassword(Array.from(passwords));
        passwords.add(uniquePassword);
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += Array.from(passwords).join('\n');

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "passwords.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
}