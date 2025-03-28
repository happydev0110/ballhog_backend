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
  
  function findSimilarWordCharacterPosition(sentence, targetWord) {
    // Normalize and process sentence and targetWord
    const normalizedSentence = sentence
      .toLowerCase()  // Convert to lowercase for case-insensitive comparison
      .replace(/[^a-zA-Z0-9\s-]/g, "")  // Remove non-alphanumeric characters except hyphen
      .split(/\s+/);  // Split the sentence into words
  
    // Split targetWord into parts (in case it contains multiple words like "Paris Saint-Germain")
    const targetParts = targetWord.toLowerCase().split(/\s|-/);  // Split by space or hyphen
  
    // Iterate through the sentence and check for similar words
    let charPosition = -1; // Default to -1, meaning no match
    let sentencePos = 0; // Keeps track of the character position in the sentence
  
    for (let i = 0; i < normalizedSentence.length; i++) {
      for (let j = 0; j < targetParts.length; j++) {
        if (isSimilar(normalizedSentence[i], targetParts[j])) {
          // If a match is found, calculate the character position in the original sentence
          const matchIndex = sentence.indexOf(normalizedSentence[i], sentencePos);
          if (matchIndex !== -1) {
            charPosition = matchIndex;
            return charPosition; // Return the first character position of the match
          }
        }
      }
      sentencePos += normalizedSentence[i].length + 1; // Update the position for the next word (including space)
    }
  
    // Return -1 if no similar word is found
    return charPosition;
  }
  
  // Example Usage
  console.log(findSimilarWordCharacterPosition('Attempt missed. Warren Zaïre-Emery (Paris Saint Germain) right footed shot from the centre of the box misses to the right. Assisted by Khvicha Kvaratskhelia.', 'Paris Saint-Germain')); // Character position of match
  console.log(findSimilarWordCharacterPosition('Attempt missed. Warren Zaïre-Emery (Paris Saint-Germain) right footed shot from the centre of the box misses to the right. Assisted by Khvicha Kvaratskhelia.', 'Paris Saint-Germain')); // Character position of match
  console.log(findSimilarWordCharacterPosition('Attempt missed. Paris Saint-Germain forward scored.', 'Paris Saint-Germain')); // Character position of match
  console.log(findSimilarWordCharacterPosition('Paris is a beautiful city. Saint-Germain is a neighborhood in Paris.', 'Paris Saint-Germain')); // Character position of match
  