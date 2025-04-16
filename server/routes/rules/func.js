import { UNVALID_SOCCER_TEAMNAME } from "../../const/index.js";

// export const isSimilar = (word1, word2) => {
//     if (Math.abs(word1.length - word2.length) > 2) return false; // Too different in length

//     let diffCount = 0;
//     let i = 0, j = 0;

//     while (i < word1.length && j < word2.length) {
//         if (word1[i] !== word2[j]) {
//             diffCount++;
//             if (diffCount > 2) return false; // More than 2 differences → not similar

//             if (word1.length > word2.length) {
//                 i++; // Skip a character in word1 (deletion)
//             } else if (word1.length < word2.length) {
//                 j++; // Skip a character in word2 (insertion)
//             } else {
//                 i++;
//                 j++;
//             }
//         } else {
//             i++;
//             j++;
//         }
//     }

//     diffCount += Math.abs(word1.length - word2.length);
//     return diffCount <= 2;
// }

// export const findSimilarWordPosition = (sentence, targetWord) => {
//     const normalizedSentence = sentence
//         .toLowerCase()  // Convert to lowercase for case-insensitive comparison
//         .replace(/[^a-zA-Z0-9\s-]/g, "")  // Remove non-alphanumeric characters except hyphen
//         .split(/\s+/);  // Split the sentence into words

//     // Split targetWord into parts (in case it contains multiple words like "Paris Saint-Germain")
//     const targetParts = targetWord.toLowerCase().split(/\s|-/);  // Split by space or hyphen

//     // Iterate through the sentence and check for similar words
//     let charPosition = -1; // Default to -1, meaning no match
//     let sentencePos = 0; // Keeps track of the character position in the sentence

//     for (let i = 0; i < normalizedSentence.length; i++) {
//         for (let j = 0; j < targetParts.length; j++) {
//             if (isSimilar(normalizedSentence[i], targetParts[j])) {
//                 // If a match is found, calculate the character position in the original sentence
//                 const matchIndex = sentence.indexOf(normalizedSentence[i], sentencePos);
//                 if (matchIndex !== -1) {
//                     charPosition = matchIndex;
//                     return charPosition; // Return the first character position of the match
//                 }
//             }
//         }
//         sentencePos += normalizedSentence[i].length + 1; // Update the position for the next word (including space)
//     }

//     // Return -1 if no similar word is found
//     return charPosition;
// }

// export const includesSimilarWord1 = (sentence, targetWord) => {
//     // Normalize and process sentence and targetWord
//     const normalizedSentence = sentence
//         .toLowerCase()  // Convert to lowercase for case-insensitive comparison
//         .replace(/[^a-zA-Z0-9\s-]/g, "")  // Remove non-alphanumeric characters except hyphen
//         .split(/\s+/);  // Split the sentence into words

//     // Split targetWord into parts (in case it contains multiple words like "Paris Saint-Germain")
//     const targetParts = targetWord.toLowerCase().split(/\s|-/);  // Split by space or hyphen

//     // Compare each word in the sentence with the parts of the target word
//     return normalizedSentence.some(word =>
//         targetParts.some(part => isSimilar(word, part))
//     );
// }

export const findSimilarWordPosition = (sentence, word) => {
    // Normalize both sentence and word by converting to lowercase and replacing spaces and hyphens with a placeholder
    const normalize = (str) => str.toLowerCase().replace(/[\s-]/g, ' ').replace(/&/g, 'and');

    const normalizedSentence = normalize(sentence);
    const normalizedWord = normalize(word);

    // Find the position of the normalized word in the normalized sentence
    const position = normalizedSentence.indexOf(normalizedWord);

    // Return the position in the original sentence
    return position !== -1 ? position : -1;
}

export const isSimilar = (name1, name2) => {
    // Remove spaces and hyphens and convert both names to lowercase
    const normalize = (name) => name.replace(/[\s-]/g, '').replace(/&/g, 'and').toLowerCase();

    return normalize(name1) === normalize(name2);
}

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

export const checkSoccerTeamName = (sentence, word) => {
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

export const isValidDate = (dateString) => {
    const dateObject = new Date(dateString);
    return !isNaN(dateObject) && dateString.trim() !== '';
}

export const isEmptyValue = () => {
}

export const parseBoolean = (str) => {
    if (typeof str === "boolean") {
        return str;
    } else {
        return str.toLowerCase() === "true";
    }
}

export const getRandomNumber = (min = 0, max = 3) => {
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomInt); // Random integer from 1 to 10
    return randomInt;
}

export const changeTeamIdx = (index) => {
    let idx = index;
    idx = (index + 1) % 2;
    return idx;
}

export const getDuraton = (start, end) => {
    return new Date(end) - new Date(start)
}

/*
    Start: Current Item Clock DisplayValue
    End:  Previous Item Clock DisplayValue
*/
export const getTimeFromClock = (start, end) => {
    const [startMins, startSec] = start.split(":").map(Number);
    const [endMins, endSec] = end.split(":").map(Number);
    console.log(start, 'start')
    console.log(end, 'end')
    console.log(startMins, startSec)
    console.log(endMins, endSec)
    // Convert both start and end times to total seconds from the start of the day
    const startTotalSeconds = startMins * 60 + startSec;
    const endTotalSeconds = endMins * 60 + endSec;
    // Calculate the difference in seconds
    const diffSeconds = startTotalSeconds - endTotalSeconds;
    return diffSeconds
}

export const delayTimer = (duration) => {
    const timer = new Promise(resolve => setTimeout(resolve, duration));
    // clearTimeout(timer);
}

export const formatDate = (date) => {
    var year, month, day = '';
    // if (isValidDate(date)) {
    //     return 'Valid Date.'
    // } else {
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    if (month < 10) {
        // console.log(year.toString() + '0' + month.toString() + day.toString(), 'date format')
        return (year.toString() + '0' + month.toString() + day.toString());
    } else {
        // console.log(year.toString() + month.toString() + day.toString(), 'date format')
        return (year.toString() + month.toString() + day.toString())
    }
    // }
}

export const findSeqIndex = (list, seq) => {
    return list.findIndex(obj => obj.sequenceNumber === seq);
}

export const findSoccerSeqIndex = (list, seq) => {
    return list.findIndex(obj => obj.sequence == seq);
}

export const reverseTime = (time, limitMinutes = 20) => {
    let minutes = parseInt(time.split(':')[0]);
    let seconds = parseInt(time.split(':')[1]);
    let result = [0, 0]
    if (seconds > 0) {
        result[0] = limitMinutes - minutes - 1;
        result[1] = 60 - seconds;
        if (result[1] < 10) {
            result[1] = '0' + result[1];
        }
    } else {
        result[0] = limitMinutes - minutes;
        result[1] = '00';
    }
    return result.join(':')
}

export const mergeArrays = (...arrays) => {
    return arrays
        .filter(Array.isArray) // Only keep elements that are arrays
        .flat(); // Merge the arrays into one
}

export const getAthleteName = (data, id = -1) => {
    let playList = mergeArrays(data.players[0].statistics[0].athletes, data.players[1].statistics[0].athletes)
    let athlete = '';
    if (id != -1) {
        athlete = playList.find(item => { return item.athlete.id == id });
    }
    return athlete.athlete.displayName
}

export function findBetweenTwoStrings(text, startString, endString, second = false, secondEnd) {
    const startIndex = text.indexOf(startString);
    const endIndex = text.indexOf(endString, startIndex + startString.length);
    if (startIndex === -1 || endIndex === -1) {
        return "Not found";
    }
    const start = startIndex + startString.length;
    let end = endIndex;
    if (second) {
        end = text.indexOf(secondEnd, endIndex + startString.length);
    }
    return text.substring(start, end).trim();
}

export function findNameFromText(text, second = false, secondEnd) {
    let startIndex = text.indexOf('(');
    let endIndex = text.indexOf(' ');
    let end = endIndex;
    if (startIndex != -1 && startIndex < 3) {
        if (second) {
            return findBetweenTwoStrings(text, ") ", " ", true, secondEnd);
        } else {
            return findBetweenTwoStrings(text, ") ", " ");
        }
    } else {
        if (second) {
            end = text.indexOf(secondEnd, endIndex + 1)
        }
        return text.substring(0, end);
    }
}

export const findNameToEnd = (text, startText = 'at ') => {
    if (text) {
        console.log(text, 'findNameToEnd func')
        let startIndex = text.indexOf(startText);
        let endIndex = text.length;
        return text.substring(startIndex, endIndex);
    } else {
        return '';
    }
}

export const getFirstTwoWords = (sentence) => {
    // Split the sentence into words
    const words = sentence.split(" ");
    // Get the first two words
    const firstTwoWords = words.slice(0, 2);
    // Join them back into a string
    return firstTwoWords.join(" ");
}

export const getWinProbability = (currentPlayItem, team1Id, winProbability = []) => {
    // console.log(team1Id, winProbability, 'Win Probability')
    if (winProbability.length == 0 || currentPlayItem == undefined) {
        return '';
    } else {
        // console.log(predictor.homeTeam.id, team1Id, winProbability, 'predictor save')
        return winProbability.find(item => item.playId == currentPlayItem.id)
    }

}

export const handleScore = (sportCategory, playItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name, boxScore, NHL_DS3_TOTAL) => {
    let description, sequenceTime, homeScore, awayScore, textIndex = tableIndex;
    let increaseMount = dataTypeItem.Increase;
    if (dataTypeItem.Increase == 'prev') {
        increaseMount = prevPlayItem.scoreValue
    } else {
        if (dataTypeItem.Increase) {
            score[tableIndex] = score[tableIndex] + increaseMount;
        } else {
            increaseMount = 0;
        }
    }
    if (dataTypeItem.rotation) {
        tableIndex = tableIndex + 1;
        tableIndex = tableIndex % 4;
    }
    description = playItem.text;

    switch (dataTypeItem.no) {
        case 'NBA-DS1':
            description = 'Three!!! '
            break;
        case 'NCAA-DS1':
            description = 'Three Point Basket!'
            break;
        // case 'NCAA-DS2':
        //     description = 'Foul. Rotate Turns'
        //     break;
        // case 'NCAA-DS3':
        //     description = 'Foul. Rotate Turns'
        //     break;
        // case 'NCAA-DS3-2':
        //     description = 'Foul. Rotate Turns'
        //     break;
        case 'NCAA-DS4':
            description = 'Dunk!!!'
            break;
        case 'NCAA-DS5':
            description = 'Turnover'
            break;
        case 'NCAA-DS6':
            description = 'Made Free Throw'
            break;
        case 'NCAA-DS7':
            description = 'Missed Free Throw'
            break;
        case 'NCAA-DS8':
            description = 'Missed Free Throw'
            break;
        case 'NCAA-DS9':
            description = 'And 1 Basket!'
            break;
        case 'NCAA-DS10-2':
            description = 'Three Point Miss'
            break;
        case 'NCAA-DS11':
            description = 'Made Free Throw'
            break;
        case 'NCAA-DS12':
            description = 'And 1 Basket!'
            break;
        case 'NCAA-DS15':
            description = 'Dunk!! End Turn'
            break;
        // NHL
        case 'NHL-DS1':
            description = playItem.participants
            [0].athlete.shortName + ' wins faceoff'
            break;
        case 'NHL-DS2':
            description = playItem.text + ' Ends Turn'
            break;
        case 'NHL-DS2-1':
            description = 'Under 30 Second Stoppage'
            break;
        case 'NHL-DS3':
            if (playItem.participants) {
                description = 'Shot by ' + playItem.participants[0].athlete.shortName + ' (' + NHL_DS3_TOTAL + ')'
            } else {
                description = 'Shot by '
            }
            break;
        case 'NHL-DS3-1':
            if (playItem.participants) {
                description = 'Shot by ' + playItem.participants[0].athlete.shortName + ' (' + NHL_DS3_TOTAL + ')'
            } else {
                description = 'Shot by '
            }
            break;
        case 'NHL-DS3-2':
            if (playItem.participants) {
                description = 'Shot by ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Shot by '
            }
            break;
        case 'NHL-DS5':
            if (playItem.participants) {
                description = 'Penalty. ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Penalty. '
            }
            break;
        case 'NHL-DS6':
            if (playItem.participants) {
                description = 'Penalty. ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Penalty. '
            }
            break;
        case 'NHL-DS7':
            if (playItem.participants) {
                description = playItem.participants[0].athlete.displayName + ' Goal'
            } else {
                description = 'Goal!!!'
            }
            break;
        case 'NHL-DS8':
            if (playItem.participants) {
                description = playItem.participants[0].athlete.displayName + ' Goal'
            } else {
                description = 'Goal!!!'
            }
            break;
        case 'NHL-DS10':
            if (playItem.participants) {
                description = playItem.participants[0].athlete.shortName + ' wins faceoff'
            } else {
                description = 'wins faceoff'
            }
            break;
        case 'NHL-DS11':
            if (playItem.participants) {
                description = 'Hit. ' + playItem.participants[0].athlete.displayName
            } else {
                description = 'Hit. '
            }
            break;
        // NHL-DS16
        case 'NHL-DS16':
            if (playItem.participants) {
                description = 'Shot blocked by ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Shot blocked by '
            }
            break;
        case 'NHL-DS17':
            if (playItem.participants) {
                description = 'Penalty. ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Penalty. '
            }
            break;
        case 'NHL-DS17-1':
            if (playItem.participants) {
                description = 'Penalty. ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Penalty. '
            }
            break;
        case 'NHL-DS17-2':
            description = 'Penalty On Both Teams.'
            break;
        case 'NHL-DS17-3':
            description = 'Penalty On Both Teams'
            break;
        // NHL2 
        case 'NHL2-DS1':
            if (playItem.participants) {
                description = playItem.participants[0].athlete.shortName + ' wins faceoff'
            } else {
                description = 'wins faceoff'
            }
            break;
        case 'NHL2-DS1-2':
            if (playItem.participants) {
                description = playItem.participants[0].athlete.shortName + ' wins faceoff'
            } else {
                description = 'wins faceoff'
            }
            break;
        case 'NHL2-DS2':
            description = 'Stoppage. Faceoff'
            break;
        case 'NHL2-DS2-2':
            description = 'Lost Faceoff. Rotate'
            break;
        case 'NHL2-DS2-3':
            description = 'End of Period'
            break;
        case 'NHL2-DS2-4':
            description = 'Lost Faceoff. Rotate'
            break;
        case 'NHL2-DS3':
            if (playItem.participants) {
                description = 'Shot!! ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Shot!!'
            }
            break;
        case 'NHL2-DS5':
            if (playItem.participants) {
                description = playItem.type.text + " " + playItem.participants[0].athlete.shortName
            } else {
                description = playItem.type.text
            }
            break;
        case 'NHL2-DS7':
            if (playItem.participants) {
                description = "Goal!!! " + playItem.participants[0].athlete.shortName
            } else {
                description = "Goal!!!"
            }
            break;
        case 'NHL2-DS8':
            if (playItem.participants) {
                description = "Goal!!! " + playItem.participants[0].athlete.shortName
            } else {
                description = "Goal!!!"
            }
            break;
        case 'NHL2-DS9':
            description = "End of Period"
            break;
        case 'NHL2-DS11':
            description = "Game Over. Thanks For Playing"
            break;
        // NBA2
        case 'NBA2-DS1':
            description = '3pt Make. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS1-2':
            description = '3pt Miss. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS1-3':
            description = '3pt Miss. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS4':
            description = '3pt Make. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS7':
            description = playItem.type.text
            break;
        case 'NBA2-DS7-2':
            description = playItem.type.text
            break;
        case 'NBA2-DS8':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS9':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS10':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS11':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS12':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS13':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS13-1':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS14':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS15':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS16':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS17':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS18':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS19':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS19-2':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS26':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS27':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS28':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS29':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS30':
            description = 'And 1 Basket!!!'
            break;
        case 'NBA2-DS30-2':
            description = 'And 1 Foul!'
            break;
        case 'NBA2-DS30-3':
            description = 'And 1 Basket!'
            break;
        case 'NBA2-DS30-4':
            description = 'And 1 3pt make!!!'
            break;
        case 'NBA2-DS31':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS33':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS34':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS45':
            description = 'Offensive Foul'
            break;
        case 'NBA2-DS51':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS52':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS53':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS54':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS55':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS56':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS57':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS58':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS61':
            description = playItem.text
            break;
        case 'NBA2-DS62':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS63':
            description = playItem.text
            break;
        case 'NBA2-DS65':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS66':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS67':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS68':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS70':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS71':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA2-DS73-1':
            description = 'Start of game'
            break;
        case 'NBA2-DS73-2':
            description = 'Jumpball'
            break;
        case 'MLB-DS1':
            description = playItem.type.alternativeText + ", " + getAthleteName(boxScore, playItem.participants[1].athlete.id)
            break;
        case 'MLB-DS1-2':
            description = playItem.type.alternativeText + ", " + getAthleteName(boxScore, playItem.participants[1].athlete.id)
            break;
        case 'MLB-DS33':
            description = 'Caught stealing'
            break;
        // NFL DS Description
        case 'NFL-DS1':
            description = 'Kickoff';
            break;
        case 'NFL-DS1-1':
            description = 'Fumble Recovery';
            break;
        case 'NFL-DS1-2':
            description = 'Kickoff Fumble Recovery';
            break;
        case 'NFL-DS1-3':
            description = 'Kickoff';
            break;
        case 'NFL-DS1-4':
            description = 'Kickoff Return TD!';
            break;
        case 'NFL-DS1-5':
            description = 'Kickoff Return TD!';
            break;
        // case 'NFL-DS1-6':
        //     description = 'Kickoff Return TD!';
        //     break;
        case 'NFL-DS1-7':
            description = 'Kickoff Return Bonus!';
            break;
        case 'NFL-DS1-8':
            description = 'Special Teams Touchdown!';
            break;
        case 'NFL-DS1-9':
            description = 'Special Teams Touchdown! XP No Good';
            break;
        case 'NFL-DS1-9-9':
            description = 'Touchdown';
            break;
        case 'NFL-DS2-1':
            // var possessionText_Num = playItem.end.possessionText.replace(/\D/g, "");
            description = '1st Down Pass! ' + findBetweenTwoStrings(playItem.text, " to ", " ") + ' (' + playItem.end.possessionText + ')'; //add name from DS text
            break;
        case 'NFL-DS2-2':
            // var possessionText_Num = playItem.end.possessionText.replace(/\D/g, "");
            description = '1st Down Run! ' + findNameFromText(playItem.text) + ' (' + playItem.end.possessionText + ')'; //add name from DS text
            break;
        case 'NFL-DS3-1':
            // var possessionText_Num = playItem.end.possessionText.replace(/\D/g, "");
            description = '1st Down Pass + Bonus Turn! ' + findBetweenTwoStrings(playItem.text, " to ", " ") + ' (' + playItem.end.possessionText + ')'; //add name from DS text
            break;
        case 'NFL-DS3-2-2':
            description = '1st Down Run!'; //add name from DS text
            break;
        case 'NFL-DS3-1':
            description = '1st Down Yardage Bonus! ' + findBetweenTwoStrings(playItem.text, " to ", " "); //add name from DS text
            break;
        case 'NFL-DS3-2':
            // var possessionText_Num = playItem.end.possessionText.replace(/\D/g, "");
            description = '1st Down Run + Bonus Turn! ' + findNameFromText(playItem.text) + ' (' + playItem.end.possessionText + ')'; //add name from DS text
            break;
        case 'NFL-DS3-2-2':
            description = '1st Down Run!'; //add name from DS text
            break;
        case 'NFL-DS3-2-4':
            description = '1st Down Run!'; //add name from DS text
            break;
        case 'NFL-DS3-6-6':
            description = '1st Down Pass! + Bonus Turn! ' + findBetweenTwoStrings(playItem.text, " to ", " ");
            break;
        case 'NFL-DS3-6-7':
            description = '1st Down Pass! ' + findBetweenTwoStrings(playItem.text, " to ", " ");
            break;
        case 'NFL-DS3-6-8':
            description = '1st Down Pass! + Bonus Turn! ' + findNameFromText(playItem.text);
            break;
        case 'NFL-DS3-6-9':
            description = '1st Down Run! ' + findNameFromText(playItem.text);
            break;
        case 'NFL-DS4':
            description = '25 Yard Play Bonus';
            break;
        case 'NFL-DS4-1':
            description = '25 Yard Play Bonus';
            break;
        case 'NFL-DS5':
            description = 'Timeout';
            break;
        case 'NFL-DS6-1':
            description = 'Touchdown! ' + findNameFromText(playItem.text); //add name from DS text
            break;
        case 'NFL-DS6-2':
            description = 'Touchdown! ' + findNameFromText(playItem.text) + ".XP No Good."; //add name from DS text
            break;
        case 'NFL-DS6-4':
            description = findBetweenTwoStrings(playItem.text, "(Shotgun)", "TOUCHDOWN") + "TOUCHDOWN";
            break;
        case 'NFL-DS6-5':
            description = findBetweenTwoStrings(playItem.text, "(Shotgun)", "TOUCHDOWN") + "TOUCHDOWN";
            break;
        case 'NFL-DS7-1':
            description = 'Touchdown! ' + findBetweenTwoStrings(playItem.text, " to ", " "); //add name from DS text
            break;
        case 'NFL-DS7-2':
            description = 'Touchdown! XP No Good'; //add name from DS text
            break;
        case 'NFL-DS8':
            description = '50 Yard FG + Bonus Turn!';
            break;
        case 'NFL-DS8-1':
            description = 'Short Field Goal!' + playItem.statYardage + 'Yards.';
            break;
        case 'NFL-DS10':
            description = 'Punt. Down ' + findNameToEnd(playItem.end.downDistanceText);
            break;
        case 'NFL-DS10-1':
            description = 'Special Teams TouchDown!';
            break;
        case 'NFL-DS10-1-1':
            description = 'Punt. Touchback';
            break;
        case 'NFL-DS10-1-2':
            description = 'Punt. Down ' + findNameToEnd(playItem.end.downDistanceText);
            break;
        case 'NFL-DS10-1-3':
            description = 'Touchdown!';
            break;
        case 'NFL-DS10-2':
            description = 'Special Teams TouchDown!';
            break;
        case 'NFL-DS10-2-1':
            description = 'Punt. Down ' + findNameToEnd(playItem.end.downDistanceText);
            break;
        case 'NFL-DS10-6':
            description = 'Special Teams Forces Turnover!';
            break;
        case 'NFL-DS10-9':
            description = 'Blocked Punt TouchDown!';
            break;
        case 'NFL-DS11':
            description = 'Punt + Bonus Turn! Down ' + findNameToEnd(playItem.end.downDistanceText);
            break;
        case 'NFL-DS11-1-2':
            description = 'Punt. Down ' + findNameToEnd(playItem.end.downDistanceText);
            break;
        case 'NFL-DS12':
            description = 'Turn Over';
            break;
        case 'NFL-DS12-1':
            description = 'Touchdown';
            break;
        case 'NFL-DS12-2':
            description = 'Defense Forces Turnover!';
            break;
        case 'NFL-DS12-3':
            description = 'Turnover';
            break;
        case 'NFL-DS12-4':
            description = 'Turnover';
            break;
        case 'NFL-DS12-5':
            description = 'Def Forces Turnover!';
            break;
        case 'NFL-DS12-6':
            description = 'Turnover';
            break;
        case 'NFL-DS13':
            description = 'Sack! ' + findBetweenTwoStrings(playItem.text, " (", ")");
            break;
        case 'NFL-DS13-1':
            description = 'Strip Sack! ' + findBetweenTwoStrings(playItem.text, " (", ")");
            break;
        case 'NFL-DS13-1-1':
            description = 'Tackle For Loss!';
            break;
        case 'NFL-DS13-2':
            description = 'Tackle For Loss!';
            break;
        case 'NFL-DS13-3':
            description = 'Tackle For Loss!';
            break;
        case 'NFL-DS14':
            description = 'Punt. Down ' + findNameToEnd(playItem.end.downDistanceText);
            break;
        case 'NFL-DS14-1':
            description = '3 and Out Punt! Bonus Turn';
            break;
        case 'NFL-DS14-1-1':
            description = 'Punt. Touchback';
            break;
        case 'NFL-DS14-2':
            description = 'Punt Return Bonus!';
            break;
        case 'NFL-DS15':
            description = 'Defense Forces Turn Over';
            break;
        case 'NFL-DS15-3':
            description = 'Defense Forces Turn Over';
            break;
        case 'NFL-DS16':
            description = 'Defensive TouchDown! XP Good.';
            break;
        case 'NFL-DS16-1':
            description = 'Defensive Touchdown!';
            break;
        case 'NFL-DS17-1':
            description = 'Defensive TD! Missed XP.';
            break;
        case 'NFL-DS18':
            description = 'Field Goal Missed';
            break;
        case 'NFL-DS18-1':
            description = 'Blocked Field Goal!';
            break;
        case 'NFL-DS19-1':
            description = 'Def Holds to Short FG!';
            break;
        case 'NFL-DS20':
            description = 'Touchdown';
            break;
        case 'NFL-DS20-4':
            description = 'Touchdown';
            break;
        case 'NFL-DS21-1':
            description = '1st Down ' + findNameFromText(playItem.text);
            break;
        case 'NFL-DS21-1-1':
            description = '1st Down Run. ' + findNameFromText(playItem.text);
            break;
        case 'NFL-DS21-2':
            description = '1st Down. ' + findBetweenTwoStrings(playItem.text, " to ", " ");
            break;
        case 'NFL-DS21-2-2':
            description = '1st Down Pass. ' + findBetweenTwoStrings(playItem.text, " to ", " ");
            break;
        case 'NFL-DS21-3':
            description = '1st Down!';
            break;
        case 'NFL-DS21-4':
            description = '1st Down, Def Penalty!';
            break;
        case 'NFL-DS21-5':
            description = '1st Down, Def Penalty!';
            break;
        case 'NFL-DS21-6':
            description = '1st Down, Def Penalty!';
            break;
        // findNameFromText
        case 'NFL-DS22':
            description = 'Field Goal Missed';
            break;
        case 'NFL-DS24-1-1':
            description = 'Turn Over on Downs!';
            break;
        case 'NFL-DS24-1-2':
            description = 'Turn Over on Downs!';
            break;
        case 'NFL-DS24-1-1-1':
            description = 'Turn Over on Downs!';
            break;
        case 'NFL-DS24-1':
            description = 'Turn Over on Downs!';
            break;
        case 'NFL-DS24-2':
            description = 'Defensive Touchdown!';
            break;
        case 'NFL-DS25':
            description = 'Safety';
            break;
        case 'NFL-DS26':
            description = 'Safety';
            break;
        case 'NFL-DS27':
            description = 'Strip Sack Turnover';
            break;
        case 'NFL-DS29':
            description = 'Game Over';
            break;
        case 'NFL-DS32':
            description = '1st Down Def Penalty!';
            break;
        case 'NFL-DS32-1':
            description = '1st Down Def Penalty!';
            break;
        case 'NFL-DS33':
            description = '1st Down Pass + Bonus Turn! ' + findBetweenTwoStrings(playItem.text, " to ", " ");
            break;
        case 'NFL-DS33-1':
            description = '1st Down Pass! ' + findBetweenTwoStrings(playItem.text, " to ", " ");
            break;
        case 'NFL-DS34':
            description = '1st Down Run + Bonus Turn! ' + findNameFromText(playItem.text);
            break;
        case 'NFL-DS34-1':
            description = '1st Down Run! ' + findNameFromText(playItem.text);
            break;
        case 'NFL-DS40':
            description = '1st Down Def Penalty!';
            break;
        case 'NFL-DS40-1':
            description = '1st Down Def Penalty!';
            break;
        // NCAAFB
        case 'NCAAFB-DS1':
            description = 'Kickoff';
            break;
        case 'NCAAFB-DS1-1':
            description = 'Fumble Recovery';
            break;
        case 'NCAAFB-DS1-1-1':
            description = 'Offense Recovers On-side Kick';
            break;
        case 'NCAAFB-DS1-2':
            description = 'Turnover. Fumble Recovery';
            break;
        case 'NCAAFB-DS1-2-2':
            description = 'Offense Recovers On-side Kick';
            break;
        case 'NCAAFB-DS1-3':
            description = 'Kickoff';
            break;
        case 'NCAAFB-DS1-4':
            description = 'Kickoff Return TD!';
            break;
        case 'NCAAFB-DS1-5':
            description = 'Kickoff Return TD!';
            break;
        case 'NCAAFB-DS1-6':
            description = 'Kickoff Return TD!';
            break;
        case 'NCAAFB-DS1-7':
            description = 'Kickoff Return Bonus!';
            break;
        case 'NCAAFB-DS1-8':
            description = 'Special Teams Touchdown!';
            break;
        case 'NCAAFB-DS1-9':
            description = 'Special Teams Touchdown! XP No Good';
            break;
        case 'NCAAFB-DS2':
            description = '1st Down. ' + playItem.text;
            break;
        case 'NCAAFB-DS2-1':
            description = '1st Down! ' + findBetweenTwoStrings(playItem.text, " to ", " "); //add name from DS text
            break;
        case 'NCAAFB-DS2-1-1':
            description = '1st Down Pass! ' + findBetweenTwoStrings(playItem.text, " to ", " ", true, " "); //add name from DS text
            break;
        case 'NCAAFB-DS2-2':
            description = '1st Down! ' + findNameFromText(playItem.text); //add name from DS text
            break;
        case 'NCAAFB-DS2-2-2':
            description = '1st Down Run! ' + findNameFromText(playItem.text, true, " "); //add name from DS text
            break;
        case 'NCAAFB-DS2-3-2003':
            description = '1st Down! Def Penalty'; //add name from DS text
            break;
        case 'NCAAFB-DS3':
            description = 'First on First. ' + playItem.text;
            break;
        case 'NCAAFB-DS3-1':
            description = '1st Down on 1st Down! ' + findBetweenTwoStrings(playItem.text, " to ", " "); //add name from DS text
            break;
        case 'NCAAFB-DS3-1-1':
            description = '1st Down Pass + Bonus Turn! ' + findBetweenTwoStrings(playItem.text, " to ", " ", true, " "); //add name from DS text
            break;
        case 'NCAAFB-DS3-2':
            description = '1st Down on 1st Down! ' + findNameFromText(playItem.text); //add name from DS text
            break;
        case 'NCAAFB-DS3-2-2':
            description = '1st Down Run + Bonus Turn! ' + findNameFromText(playItem.text, true, " "); //add name from DS text
            break;
        case 'NCAAFB-DS3-3-3':
            description = '1st Down! Def Penalty'; //add name from DS text
            break;
        // case 'NCAAFB-DS3-4':
        //     description = '1st Down + Bonus Turn! Defensive Penalty';
        //     break;
        case 'NCAAFB-DS4':
            description = '25 Yard Play Bonus';
            break;
        case 'NCAAFB-DS4-1':
            description = '25 Yard Play Bonus';
            break;
        case 'NCAAFB-DS6':
            description = 'Touchdown!' + findNameFromText(playItem.text, true, " ");
            break;
        case 'NCAAFB-DS6-1':
            description = 'Touchdown! ' + findNameFromText(playItem.text, true, " "); //add name from DS text
            break;
        case 'NCAAFB-DS6-2':
            description = 'Touchdown! XP No Good.'; //add name from DS text
            break;
        case 'NCAAFB-DS7':
            description = 'Touchdown! ' + findNameFromText(playItem.text); //add name from DS text
            break;
        case 'NCAAFB-DS7-1':
            description = 'Touchdown! ' + findNameFromText(playItem.text, true, " "); //add name from DS text
            break;
        case 'NCAAFB-DS7-2':
            description = 'Touchdown! XP No Good.'; //add name from DS text
            break;
        case 'NCAAFB-DS8':
            description = '45+ Yard FG + Bonus Turn.'; //add name from DS text
            break;
        case 'NCAAFB-DS10':
            description = 'Punt. Down ' + findNameToEnd(playItem.end.downDistanceText);
            break;
        case 'NCAAFB-DS10-1':
            description = 'Special Teams TouchDown!';
            break;
        case 'NCAAFB-DS10-2':
            description = 'Special Teams TouchDown! XP Fail.';
            break;
        case 'NCAAFB-DS10-3':
            description = 'Special Teams TouchDown!';
            break;
        case 'NCAAFB-DS10-4':
            description = 'Special Teams TouchDown! XP Fail.';
            break;
        case 'NCAAFB-DS10-5':
            description = 'Punt Return Fumble';
            break;
        case 'NCAAFB-DS10-7':
            description = 'Punt Return Bonus!';
            break;
        case 'NCAAFB-DS11':
            description = 'Punt + Bonus Turn! Down ' + findNameToEnd(playItem.end.downDistanceText);
            break;
        // case 'NCAAFB-DS11-1':
        //    description = 'Punt Bonus! Down ' + findNameToEnd(playItem.end.downDistanceText);
        //    break;
        case 'NCAAFB-DS12':
            description = 'Turn Over';
            break;
        case 'NCAAFB-DS12-1':
            description = 'Touchdown';
            break;
        case 'NCAAFB-DS13':
            description = 'Sack! ' + findBetweenTwoStrings(playItem.text, " by ", " ", true, " ");
            break;
        case 'NCAAFB-DS13-1':
            description = 'Tackle For Loss!';
            break;
        case 'NCAAFB-DS13-1-1':
            description = 'Tackle For Loss!';
            break;
        case 'NCAAFB-DS13-2':
            description = 'Tackle For Loss!';
            break;
        case 'NCAAFB-DS13-3':
            description = 'Sack! ' + findBetweenTwoStrings(playItem.text, " by ", " ", true, " ");
            break;
        case 'NCAAFB-DS14':
            description = 'Punt. Down ' + findNameToEnd(playItem.end.downDistanceText);
            break;
        case 'NCAAFB-DS14-1':
            description = '3 and Out Stop! Bonus Turn.';
            break;
        case 'NCAAFB-DS15':
            description = 'Def Forces Turn Over';
            break;
        case 'NCAAFB-DS16':
            description = 'Defensive TD! ';
            break;
        case 'NCAAFB-DS16-1':
            description = 'Defensive TD!';
            break;
        case 'NCAAFB-DS17-1':
            description = 'Defensive TD! XP Fail.';
            break;
        case 'NCAAFB-DS18':
            description = 'Field Goal Missed';
            break;
        case 'NCAAFB-DS19-1':
            description = 'Short Field Goal';
            break;
        case 'NCAAFB-DS20':
            description = 'Touchdown';
            break;
        case 'NCAAFB-DS21':
            description = '1st Down';
            break;
        case 'NCAAFB-DS21-1':
            description = '1st Down ' + findNameFromText(playItem.text, true, " ");
            break;
        case 'NCAAFB-DS21-2':
            description = '1st Down. ' + findBetweenTwoStrings(playItem.text, " to ", " ", true, " ");
            break;
        case 'NCAAFB-DS21-3':
            description = '1st Down. Def Penalty';
            break;
        // findNameFromText
        case 'NCAAFB-DS22':
            description = 'Field Goal Missed';
            break;
        case 'NCAAFB-DS24-2':
            description = 'Turn Over on Downs!';
            break;
        case 'NCAAFB-DS24-3':
            description = 'Turn Over on Downs!';
            break;
        case 'NCAAFB-DS25':
            description = 'Safety';
            break;
        case 'NCAAFB-DS26':
            description = 'Safety';
            break;
        case 'NCAAFB-DS27':
            description = 'Strip Sack Turnover';
            break;
        case 'NCAAFB-DS29':
            description = 'Game Over';
            break;
        case 'NCAAFB-DS30':
            description = 'Two Minute Warning';
            break;
        case 'NCAAFB-DS31':
            description = 'End of Quarter';
            break;
        //NBA3
        case 'NBA3-DS1-1':
            description = '3pt Make. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS1-2':
            description = '3pt Miss. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS1-2-2':
            description = '3pt Miss #2. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS1-3':
            description = '3pt Miss. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS3':
            description = 'Dunk. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS3-1':
            description = 'Dunk. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS4-1':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS4-2':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS5-1':
            description = 'Made FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS5-2':
            description = 'Missed FT. ' + getAthleteName(boxScore, playItem.participants[0].athlete.id)
            break;
        case 'NBA3-DS7-1':
            description = playItem.type.text
            break;
        //NCAABB2
        case 'NCAABB2-DS1':
            description = '3pt make. ' + getFirstTwoWords(playItem.text)
            break;
        case 'NCAABB2-DS1-1':
            description = '3pt miss. ' + getFirstTwoWords(playItem.text)
            break;
        case 'NCAABB2-DS1-1-1':
            description = '2nd 3pt miss. ' + getFirstTwoWords(playItem.text)
            break;
        case 'NCAABB2-DS2':
            description = '3pt miss. ' + getFirstTwoWords(playItem.text)
            break;
        case 'NCAABB2-DS3':
            description = 'Dunk! ' + getFirstTwoWords(playItem.text)
            break;
        case 'NCAABB2-DS9':
            description = 'Dunk! ' + getFirstTwoWords(playItem.text)
            break;
        // NHL3
        case 'NHL3-DS2-1':
            description = playItem.participants
            [0].athlete.shortName + ' wins faceoff'
            break;
        case 'NHL3-DS2-2':
            if (playItem.participants) {
                description = playItem.participants[0].athlete.shortName + ' wins faceoff'
            } else {
                description = 'wins faceoff'
            }
            break;
        case 'NHL3-DS3':
            if (playItem.participants) {
                description = 'Shot by ' + playItem.participants[0].athlete.shortName + ' (' + NHL_DS3_TOTAL + ')'
            } else {
                description = 'Shot by '
            }
            break;
        case 'NHL3-DS3-1':
            if (playItem.participants) {
                description = 'Shot by ' + playItem.participants[0].athlete.shortName + ' (' + NHL_DS3_TOTAL + ')'
            } else {
                description = 'Shot by '
            }
            break;
        case 'NHL3-DS3-2':
            if (playItem.participants) {
                description = 'Shot by ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Shot by '
            }
            break;
        case 'NHL3-DS4-1':
            description = 'Stoppage(' + playItem.text + ')'
            break;
        case 'NHL3-DS5-1':
            if (playItem.participants) {
                description = playItem.participants[0].athlete.displayName + ' Goal'
            } else {
                description = 'Goal!!!'
            }
            break;
        case 'NHL3-DS5-2':
            if (playItem.participants) {
                description = playItem.participants[0].athlete.displayName + ' Goal'
            } else {
                description = 'Goal!!!'
            }
            break;
        case 'NHL3-DS7-1':
            if (playItem.participants) {
                description = 'Penalty. ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Penalty. '
            }
            break;
        case 'NHL3-DS7-1-1':
            description = 'Penalty.'
            break;
        case 'NHL3-DS7-2':
            if (playItem.participants) {
                description = 'Penalty. ' + playItem.participants[0].athlete.shortName
            } else {
                description = 'Penalty. '
            }
            break;
        case 'NHL3-DS7-3':
            description = 'Penalty On Both Teams.'
            break;
        case 'NHL3-DS7-4':
            description = 'Penalty On Both Teams'
            break;
        case 'NHL3-DS7-5':
            description = 'Challenge Penalty'
            break;
        case 'NHL3-DS7-6':
            description = 'Challenge Penalty'
            break;
        case 'NHL3-DS8-1':
            description = 'Icing. Rotate Turns.'
            break;
        case 'NHL3-DS8-2':
            description = 'Goalie Stopped. Rotate Turns.'
            break;
        case 'NHL3-DS8-3':
            description = 'Off-side. Rotate Turns.'
            break;
        case 'NHL3-DS8-4':
            description = 'Puck Frozen. Rotate Turns.'
            break;
        default:
            break;
    }
    // Previous Text
    if (dataTypeItem.description) {
        description = prevPlayItem.text;
    }
    // console.log(description,'Func')
    let timeDisplay;
    if (sportCategory === 'MLB') {
        timeDisplay = playItem.period.displayValue
    } else {
        if (sportCategory == 'NHL' || sportCategory == 'NHL2') {
            timeDisplay = reverseTime(playItem.clock.displayValue);
        } else {
            timeDisplay = playItem.clock.displayValue;
        }
    }
    if (sportCategory === 'MLB') {
        sequenceTime = timeDisplay
    } else {
        sequenceTime = playItem.period.displayValue + '(' + timeDisplay + ')';
    }
    homeScore = playItem.homeScore;
    awayScore = playItem.awayScore;
    // console.log(score,'handleScore')
    return {
        textIndex,
        tableIndex,
        increaseMount,
        sequenceTime,
        score,
        description,
        homeScore,
        awayScore
    }
}

export const handleSoccerScore = (playItem, dataTypeItem, score, tableIndex, turnCounts, prevPlayItem, team1Name, team2Name) => {
    let description, sequenceTime, homeScore, awayScore, textIndex = tableIndex;
    let increaseMount = dataTypeItem.Increase;
    if (dataTypeItem.Increase == -1) {
        increaseMount = prevPlayItem.scoreValue
    }
    if (dataTypeItem.Increase) {
        score[tableIndex] = score[tableIndex] + increaseMount;
    } else {
        increaseMount = 0;
    }
    if (dataTypeItem.rotation) {
        turnCounts = turnCounts + 1;
        tableIndex = tableIndex + 1;
        tableIndex = tableIndex % 4;
    }
    description = playItem.text;
    switch (dataTypeItem.no) {
        case 'SOCCER-DS16':
            description = playItem.play.type.text;
            break;

        // case 'SOCCER-DS7':
        //     description = 'Foul by ' + team1Name + " " + playItem.play.participants[0].athlete.displayName
        //     break;
        // case 'SOCCER-DS8':
        //     description = 'Foul by ' + team2Name + " " + playItem.play.participants[0].athlete.displayName
        //     break;
        // case 'SOCCER-DS9':
        //     description = 'Goal! ' + playItem.play.participants[0].athlete.displayName
        //     break;
        // case 'SOCCER-DS10':
        //     description = 'Goal! ' + playItem.play.participants[0].athlete.displayName
        //     break;
        // case 'SOCCER-DS11':
        //     // description = 'Shot on target ' + playItem.play.participants[0].athlete.displayName
        //     break;
        // case 'SOCCER-DS12':
        //     // description = 'Shot on target ' + playItem.play.participants[0].athlete.displayName
        //     break;
        // case 'SOCCER-DS14':
        //     description = team1Name + ' earns a coner'
        //     break;
        // case 'SOCCER-DS15':
        //     description = team2Name + ' earns a coner'
        //     break;
        // case 'SOCCER-DS21':
        //     description = playItem.play.shortText
        //     break;
        // case 'SOCCER-DS24':
        //     description = 'Own Goal ' + playItem.play.participants[0].athlete.displayName
        //     break;
        // case 'SOCCER-DS25':
        //     description = 'Own Goal ' + playItem.play.participants[0].athlete.displayName
        //     break;
        // default:
        //     break;
    }
    if (dataTypeItem.description) {
        description = prevPlayItem.text;
    }
    sequenceTime = playItem.time.displayValue;

    return {
        textIndex,
        tableIndex,
        turnCounts,
        increaseMount,
        sequenceTime,
        score,
        description,
        homeScore,
        awayScore
    }
}