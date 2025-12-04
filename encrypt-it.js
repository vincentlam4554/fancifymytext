window.addEventListener("load", function () {
    console.log("Window loaded!");

    document.getElementById("encrypt-btn").addEventListener("click", handleEncrypt);
    document.getElementById("reset-btn").addEventListener("click", handleReset);
});

function handleEncrypt() {
    console.log("Button clicked!");

    let input = document.getElementById("input-text").value;
    let encrypted = shiftCipher(input);

    document.getElementById("output").textContent = encrypted;
}

function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("output").textContent = "";
    console.log("Reset clicked!");
}

function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let ch = text[i];

        if (ch < 'a' || ch > 'z') {
            result += ch;
        } else if (ch === 'z') {
            result += 'a';
        } else {
            let code = ch.charCodeAt(0);
            result += String.fromCharCode(code + 1);
        }
    }

    return result;
}
