function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function changeStyle() {
    let textArea = document.getElementById("textInput");

    if (document.getElementById("fancy").checked) {
        alert("FancyShmancy!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        alert("BoringBetty!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    let textArea = document.getElementById("textInput");

    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-MOO";
    }

    textArea.value = sentences.join(". ");
}
