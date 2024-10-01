const text = "Uma Dua Tres Quatro";

function countWords(text) {
    return text.split(" ").length;
}

console.log(countWords(text));