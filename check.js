function normalizeWord(word) {
  return word
    .toLowerCase()  // Convert to lowercase for case-insensitive comparison
    .replace(/[^a-zA-Z0-9\s-]/g, "")  // Remove non-alphanumeric characters except hyphen
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");  // Normalize accented characters
}

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

function includesSimilarWord(sentence, targetWord) {
  // Normalize and process sentence and targetWord
  const normalizedSentence = sentence
    .toLowerCase()  // Convert to lowercase for case-insensitive comparison
    .replace(/[^a-zA-Z0-9\s-]/g, "")  // Remove non-alphanumeric characters except hyphen
    .split(/\s+/);  // Split the sentence into words

  // Split targetWord into parts (in case it contains multiple words like "Paris Saint-Germain")
  const targetParts = targetWord.toLowerCase().split(/\s|-/);  // Split by space or hyphen

  console.log(normalizedSentence, 'Sentence')
  console.log(targetParts, 'targetParts')
  // Compare each word in the sentence with the parts of the target word
  return normalizedSentence.some(word =>
    targetParts.some(part => isSimilar(normalizeWord(word), normalizeWord(part)))
  );
}

function containsWord(sentence, word) {
  // Normalize both sentence and word by removing spaces and hyphens
  const normalize = (str) => str.replace(/[\s-]/g, '').toLowerCase();
  
  const normalizedSentence = normalize(sentence);
  const normalizedWord = normalize(word);

  return normalizedSentence.includes(normalizedWord);
}

// Example Usage
// console.log(includesSimilarWord("Corner, Guadalajara. Conceded by Eduardo Águila.", "Atlético de San Luis"))
// console.log(includesSimilarWord("Corner, Guadalajara. Conceded by Eduardo Águila.", "Guadalajara"))

// console.log(containsWord('John Doe is here', 'John-Doe'));  // true
// console.log(containsWord('Alice went to the store', 'Alice store'));  // true
// console.log(containsWord('The quick-brown fox', 'quick brown'));  // true
// console.log(containsWord('The quick brown fox', 'quick-brown'));  // true
console.log(containsWord("Corner, Guadalajara. Conceded by Eduardo Águila.", "Eduardo-Águila"));  // false