let text = "Test, 1, Thyago, 1, @ , 1";

function replaceOccur(text, word, newWord) {
    return text.replaceAll(word, newWord);
}

console.log(replaceOccur(text, "1", "ABC"));