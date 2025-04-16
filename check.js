// function findWordPosition(sentence, word) {
//   // Normalize both sentence and word by converting to lowercase and replacing spaces and hyphens with a placeholder
//   const normalize = (str) => str.toLowerCase().replace(/[\s-]/g, ' ').replace(/&/g, 'and');

//   const normalizedSentence = normalize(sentence);
//   const normalizedWord = normalize(word);

//   // Find the position of the normalized word in the normalized sentence
//   const position = normalizedSentence.indexOf(normalizedWord);

//   // Return the position in the original sentence
//   return position !== -1 ? position : -1;
// }

// // Example usage
// console.log(findWordPosition('Alice stor went to the store', '-store'));  // 0

// export const includesSimilarWord = (sentence, word) => {
//   // Normalize both sentence and word by removing spaces, hyphens, and replacing '&' with 'and'
//   const normalize = (str) => str
//       .replace(/[\s-]/g, '')           // Remove spaces and hyphens
//       .replace(/&/g, 'and')            // Replace '&' with 'and'
//       .toLowerCase();                  // Convert to lowercase

//   const normalizedSentence = normalize(sentence);
//   const normalizedWord = normalize(word);
//   return normalizedSentence.includes(normalizedWord);
// }

// export const includesSimilarWord = (sentence, word) => {
//   // Normalize both sentence and word by removing spaces and hyphens
//   const normalize = (str) => str.replace(/[\s-]/g, '').toLowerCase();

//   const normalizedSentence = normalize(sentence);
//   const normalizedWord = normalize(word);

//   return normalizedSentence.includes(normalizedWord);
// }

const UNVALID_SOCCER_TEAMNAME = {
  'Brighton & Hove Albion': [
    'Brighton and Hove Albion',
    "BHA",                                  //Abbreviation
    'Brighton & Hove Albion',               //displayName
    "Brighton"                              //shortDisplayName
  ],
  'LAFC': [
    'Los Angeles Football Club',
    "LAFC",                                 //Abbreviation
    "LAFC",                                 //displayName
    "LAFC"                                  //shortDisplayName
  ],
  'Atlético Madrid': [
    'Atletico Madrid',
    "ATM",                                  //Abbreviation
    "Atlético Madrid",                      //displayName
    "Atlético"                              //shortDisplayName
  ],
  'Bayer Leverkusen': [
    'Bayer 04 Leverkusen',
    "B04",                                  //Abbreviation
    "Bayer Leverkusen",                     //displayName
    "Leverkusen"                            //shortDisplayName
  ],
  'Paris Saint-Germain': [
    'Paris Saint Germain',
    "PSG",                                  //Abbreviation
    "Paris Saint-Germain",                  //displayName
    "PSG"                                   //shortDisplayName
  ],
  'FC Juarez': [
    'Juárez',
    "JUA",                                  //Abbreviation
    "FC Juarez",                            //displayName
    "Juarez"                                //shortDisplayName
  ],
  'AFC Bournemouth': [
    "BOU",                                  //Abbreviation
    "AFC Bournemouth",                      //displayName
    "Bournemouth"                           //shortDisplayName
  ],
  'Atlético de San Luis': [
    'Atlético San Luis',
    "ASL",                                  //Abbreviation
    "Atlético de San Luis",                 //displayName
    "Atl. San Luis"                         //shortDisplayName
  ],
  'Bay FC': [
    'Bay',
    "BAY",                                  //Abbreviation
    "Bay FC",                               //displayName
    "Bay FC"                                //shortDisplayName
  ],
  'Alavés': [
    'Alaves',
    "ALA",                                  //Abbreviation
    "Alavés",                               //displayName
    "Alavés"                                //shortDisplayName
  ],
  'Leganés': [
    'Leganes',
    "LEG",                                  //Abbreviation
    "Leganés",                              //displayName
    "Leganés"                               //shortDisplayName
  ],
  'Bayern Munich': [
    "FC Bayern München",
    "MUN",                                   //Abbreviation
    "Bayern Munich",                         //displayName
    "Bayern",                                //shortDisplayName
  ],
  "Internazionale": [
    "INT",                                  //Abbreviation
    "Internazionale",                       //displayName
    "Inter Milan"                           //shortDisplayName
  ]
}

function checkSoccerTeamName(sentence, word) {
  // let name = word;
  // if (UNVALID_SOCCER_TEAMNAME[word]) {
  //     name = UNVALID_SOCCER_TEAMNAME[word];
  // }

  // return sentence.includes(word);
  // Check if the word exists in UNVALID_SOCCER_TEAMNAME
  const variations = UNVALID_SOCCER_TEAMNAME[word];

  // If the team name has variations, check for all possible names in the sentence
  if (variations) {
    // Convert sentence to lowercase for case-insensitive comparison
    // const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseSentence = sentence;

    // Check if any of the variations are found in the sentence
    // return variations.some(variation => lowerCaseSentence.includes(variation.toLowerCase()));
    return variations.some(variation => lowerCaseSentence.includes(variation));
  }

  // If the word doesn't have variations, just check if it's in the sentence
  // return sentence.toLowerCase().includes(word.toLowerCase());
  return sentence.includes(word);
}

console.log(checkSoccerTeamName("Attempt missed. Jan Paul van Hecke (Brighton and Hove Albion) header from very close range is high and wide to the right. Assisted by Yankuba Minteh with a cross following a set piece situation.", "Brighton & Hove Albion"))

console.log(checkSoccerTeamName("Corner, Bournemouth. Conceded by Tariq Lamptey", "Brighton & Hove Albion"))

console.log(checkSoccerTeamName("Corner, FC Bayern München. Conceded by Francesco Acerbi.", "Bayern Munich"))

// console.log(checkSoccerTeamName("Attempt saved. Aymen Sliti (Feyenoord) left footed shot from outside the box is saved in the centre of the goal. Assisted by Gijs Smal.", "FEY"))

// console.log(checkSoccerTeamName("Attempt saved. Aymen Sliti (Feyenoord) left footed shot from outside the box is saved in the centre of the goal. Assisted by Gijs Smal.", "Internazionale"))

// console.log(checkSoccerTeamName("Attempt saved. Aymen Sliti (Feyenoord) left footed shot from outside the box is saved in the centre of the goal. Assisted by Gijs Smal.", "INT"))

// console.log(checkSoccerTeamName("Attempt saved. Telasco Segovia (Inter Miami CF) right footed shot from the right side of the box is saved in the top right corner.", 'Inter Miami CF'))