function isSimilar(word1, word2) {
    // Return false if the length difference is more than 2
    if (Math.abs(word1.length - word2.length) > 2) return false;

    let diffCount = 0;
    let i = 0, j = 0;

    // Compare character by character
    while (i < word1.length && j < word2.length) {
        if (word1[i] !== word2[j]) {
            diffCount++;
            if (diffCount > 2) return false; // More than 2 differences
            if (word1.length > word2.length) {
                i++; // Skip a character in word1 (deletion)
            } else if (word1.length < word2.length) {
                j++; // Skip a character in word2 (insertion)
            } else {
                i++;
                j++;
            }
        } else {
            i++;
            j++;
        }
    }

    diffCount += Math.abs(word1.length - word2.length);
    return diffCount <= 2;
}

function sentenceIncludesSimilarWord(sentence, targetWord) {
    // Normalize and process sentence and targetWord
    const normalizedSentence = sentence
        .toLowerCase()  // Convert to lowercase for case-insensitive comparison
        .replace(/[^a-zA-Z0-9\s-]/g, "")  // Remove non-alphanumeric characters except hyphen
        .split(/\s+/);  // Split the sentence into words

    // Split targetWord into parts (in case it contains multiple words like "Paris Saint-Germain")
    const targetParts = targetWord.toLowerCase().split(/\s|-/);  // Split by space or hyphen

    // Compare each word in the sentence with the parts of the target word
    return normalizedSentence.some(word =>
        targetParts.some(part => isSimilar(word, part))
    );
}

// Example Usage
// console.log(sentenceIncludesSimilarWord('Attempt missed. Warren Zaïre-Emery (Paris Saint Germain) right footed shot from the centre of the box misses to the right. Assisted by Khvicha Kvaratskhelia.', 'Paris Saint-Germain')); // true

// console.log(sentenceIncludesSimilarWord("The admin panel is ready.", "admin-panel")); // true
// console.log(sentenceIncludesSimilarWord("I love apples.", "apple")); // true
// console.log(sentenceIncludesSimilarWord("This is an amazing event.", "amazng")); // true (1 char difference)
// console.log(sentenceIncludesSimilarWord("The backend API is running.", "fronted")); // false
// console.log(sentenceIncludesSimilarWord("I will register my account.", "registr")); // true (1 character missing)
// console.log(sentenceIncludesSimilarWord("The new adminapanel is live!", "admin panel")); // true (hyphen difference)
// console.log(sentenceIncludesSimilarWord("The UI is great!", "backend")); // false (not similar)


console.log(isSimilar('Paris Saint-Germain', 'Paris Saint Germain'))