function findWordPosition(sentence, word) {
  // Normalize both sentence and word by converting to lowercase and replacing spaces and hyphens with a placeholder
  const normalize = (str) => str.toLowerCase().replace(/[\s-]/g, ' ');

  const normalizedSentence = normalize(sentence);
  const normalizedWord = normalize(word);

  // Find the position of the normalized word in the normalized sentence
  const position = normalizedSentence.indexOf(normalizedWord);

  // Return the position in the original sentence
  return position !== -1 ? position : -1;
}

// Example usage
console.log(findWordPosition('Alice stor went to the store', '-store'));  // 0
