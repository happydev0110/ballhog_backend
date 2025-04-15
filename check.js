function findWordPosition(sentence, word) {
  // Normalize both sentence and word by converting to lowercase and replacing spaces and hyphens with a placeholder
  const normalize = (str) => str.toLowerCase().replace(/[\s-]/g, ' ').replace(/&/g, 'and');

  const normalizedSentence = normalize(sentence);
  const normalizedWord = normalize(word);

  // Find the position of the normalized word in the normalized sentence
  const position = normalizedSentence.indexOf(normalizedWord);

  // Return the position in the original sentence
  return position !== -1 ? position : -1;
}

// // Example usage
// console.log(findWordPosition('Alice stor went to the store', '-store'));  // 0

export const includesSimilarWord = (sentence, word) => {
  // Normalize both sentence and word by removing spaces, hyphens, and replacing '&' with 'and'
  const normalize = (str) => str
      .replace(/[\s-]/g, '')           // Remove spaces and hyphens
      .replace(/&/g, 'and')            // Replace '&' with 'and'
      .toLowerCase();                  // Convert to lowercase

  const normalizedSentence = normalize(sentence);
  const normalizedWord = normalize(word);
  return normalizedSentence.includes(normalizedWord);
}

// export const includesSimilarWord = (sentence, word) => {
//   // Normalize both sentence and word by removing spaces and hyphens
//   const normalize = (str) => str.replace(/[\s-]/g, '').toLowerCase();

//   const normalizedSentence = normalize(sentence);
//   const normalizedWord = normalize(word);

//   return normalizedSentence.includes(normalizedWord);
// }

console.log(includesSimilarWord("Attempt saved. Aymen Sliti (Feyenoord) left footed shot from outside the box is saved in the centre of the goal. Assisted by Gijs Smal.", "Feyenoord Rotterdam"))

console.log(includesSimilarWord("Attempt saved. Aymen Sliti (Feyenoord) left footed shot from outside the box is saved in the centre of the goal. Assisted by Gijs Smal.", "FEY"))

console.log(includesSimilarWord("Attempt saved. Aymen Sliti (Feyenoord) left footed shot from outside the box is saved in the centre of the goal. Assisted by Gijs Smal.", "Internazionale"))

console.log(includesSimilarWord("Attempt saved. Aymen Sliti (Feyenoord) left footed shot from outside the box is saved in the centre of the goal. Assisted by Gijs Smal.", "INT"))

console.log(includesSimilarWord("Attempt saved. Telasco Segovia (Inter Miami CF) right footed shot from the right side of the box is saved in the top right corner.", 'Inter Miami CF'))