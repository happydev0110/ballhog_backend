import axios from "axios";
import { URL, DATASET_TYPE_CATEGORY } from "../../const/index.js";
import { checkFunc, checkSoccerFunc } from "./checkFunc.js";
import { changeTeamIdx, getWinProbability, handleScore, handleSoccerScore, mergeArrays, reverseTime, findSimilarWordPosition } from "./func.js";

export const getCheckedDS = async (req, res) => {
    const { event, team1Idx, sportCategory } = req.body;

    let selTeamIdx;
    let tableScore = [0, 0, 0, 0];
    let selTextIdx;
    let selTblIdx;
    let description;
    let time;
    let historyList;

    let eventList = [];
    let resultList = [];
    let startTime = -1;
    let timeList;

    let winProbability;
    let selectedTeam1s = [0, 0, 0, 0]
    let homeScore = 0;
    let awayScore = 0;

    let playList;
    let resList;
    let dataSetType = DATASET_TYPE_CATEGORY[sportCategory];
    let apiUrl = URL[sportCategory];

    let response = await axios.get(apiUrl,
        {
            params: {
                event
            }
        }
    )

    playList = response.data;
    // setInitial();

    resList = response.data;
    let result;
    let matchEvtList = [];
    let selectedTeamIdx = 0;
    let score = [0, 0, 0, 0], tableIndex = 0, textIndex = 0, increaseAmount;
    let team1Id, team2Id, team1Name, team2Name, team1Abbre, team2Abbre, team1ShortName, team2ShortName;

    let hisList = [];
    let DSList = [[]];
    let prevHisList = [[], [], [], []];
    let timerList = [];
    let quarter = 1;

    let PREV_NHL_DS2 = { id: 502, seq: 0, teamId: 0 };
    let PREV_NHL_DS5 = { id: 516, seq: 0, teamId: 0 }

    let NBA2_DS1_CNT = 0;
    let NHL_DS3_CNT = 0;
    let NHL_DS3_TOTAL = 0;
    let NHL2_DS2_CNT = 0;
    let NCAABB2_DS1_1_CNT = 0;
    let NBA3_DS1_2_CNT = 0;

    let currentPlayItem;
    let prevPlayItem;
    let nextPlayItem;
    let winProbabilityData = '';

    let team1Score = 0;
    let team2Score = 0;

    if (resList.boxscore.teams[team1Idx]) {
        team1Id = resList.boxscore.teams[team1Idx].team.id;                                     //team1 ID
        team2Id = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.id;                 //team2 ID
        team1Name = resList.boxscore.teams[team1Idx].team.name;                                 //team1 Name
        team2Name = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.name;
        team1Abbre = resList.boxscore.teams[team1Idx].team.abbreviation;                        //team1 abbreviation
        team2Abbre = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.abbreviation;
        team1ShortName = resList.boxscore.teams[team1Idx].team.shortDisplayName;                //team1 Short Name
        team2ShortName = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.shortDisplayName;
        
        // if (team1Name.includes('&')) {
        //     team1Name = team1Name.replace('&', 'and');
        // }

        // if (team2Name.includes('&')) {
        //     team2Name = team2Name.replace('&', 'and');
        // }
    }

    if (sportCategory == 'SOCCER') {
        if (team1Idx != -1 && resList.commentary) {
            let team1Score = 0, team2Score = 0;

            for (let i = 0; i < resList.commentary.length; i++) {
                // console.log(i, 'soccer item')
                let teamIndex = selectedTeam1s[tableIndex];

                for (let j = 0; j < dataSetType.length; j++) {
                    currentPlayItem = resList.commentary[i];
                    prevPlayItem = resList.commentary[i - 1];
                    var prevEventItem;

                    var dataTypeItem = dataSetType[j];
                    var matchTeamId = team1Id;

                    if (checkSoccerFunc(dataTypeItem, currentPlayItem, prevPlayItem, team1Id, team2Id, team1Name, team2Name, team1Abbre, team2Abbre, team1ShortName, team2ShortName, matchTeamId)) {
                        continue;
                    }

                    /* Team Score in Soccer(SOCCER-DS9,SOCCER-DS10) */
                    if (dataTypeItem.no === 'SOCCER-DS9' || dataTypeItem.no === 'SOCCER-DS10') {
                        if (currentPlayItem.text === undefined) {
                            continue;
                        } else {
                            if (currentPlayItem.text.indexOf('Goal!') === -1 || currentPlayItem.text.indexOf('OVERTURNED') !== -1) {
                                continue;
                            } else {
                                // let team1NameIdx = currentPlayItem.text.indexOf(team1Name);
                                // let team2NameIdx = currentPlayItem.text.indexOf(team2Name);

                                let team1NameIdx = findSimilarWordPosition(currentPlayItem.text, team1Name);
                                let team2NameIdx = findSimilarWordPosition(currentPlayItem.text, team2Name);

                                // console.log(team1NameIdx, team1Name, 'team1NameIdx')
                                // console.log(team2NameIdx, team2Name, 'team2NameIdx')
                                // console.log(currentPlayItem.text,'current text')

                                // if (team1NameIdx == -1) team1NameIdx = currentPlayItem.text.indexOf(team1Name);
                                // if (team2NameIdx == -1) team2NameIdx = currentPlayItem.text.indexOf(team2Name);

                                if (team1NameIdx !== -1 && team2NameIdx !== -1) {
                                    team1Score = parseInt(currentPlayItem.text.slice(team1NameIdx + team1Name.length + 1, team1NameIdx + team1Name.length + 3).trim());
                                    team2Score = parseInt(currentPlayItem.text.slice(team2NameIdx + team2Name.length + 1, team2NameIdx + team2Name.length + 3).trim());

                                    console.log(team1Score, team2Score, 'Soccer Score')
                                }
                            }
                        }
                    }


                    matchEvtList.push({
                        ...currentPlayItem,
                        prevPlayItem: prevPlayItem
                    });

                    result = handleSoccerScore(currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name);
                    hisList = prevHisList;

                    /* For Logos */
                    if (currentPlayItem.play) {
                        if (currentPlayItem.play.team === undefined) {
                            selectedTeamIdx = -1
                        } else {
                            if (currentPlayItem.play.team.displayName === team1Name) {
                                selectedTeamIdx = teamIndex;
                            } else {
                                selectedTeamIdx = (parseInt(teamIndex) + 1) % 2;
                            }
                        }
                    }

                    if (tableIndex != result.tableIndex) {
                        hisList[result.tableIndex] = [];
                    }

                    let historyItem = {
                        no: dataTypeItem.no,
                        seq: currentPlayItem.sequence,
                        teamIdx: selectedTeamIdx,
                        score: result.score[result.textIndex],
                        description: result.description,
                        increase: result.increaseMount,
                        rotation: dataTypeItem.rotation,
                        time: currentPlayItem.time.displayValue
                    }

                    if (dataTypeItem.logo) {
                        historyItem.teamIdx = parseInt(team1Idx);
                        if (dataTypeItem.logo == 2) historyItem.teamIdx = (parseInt(team1Idx) + 1) % 2;
                    }

                    /* set reverse teamIdx for logo */
                    if (dataTypeItem.logoReverse) {
                        historyItem.teamIdx = changeTeamIdx(selectedTeamIdx);
                    }

                    hisList[result.textIndex].push(historyItem);

                    if (dataTypeItem.rotation) {
                        DSList[DSList.length - 1] = hisList[result.textIndex];
                        DSList.push([])
                    } else if (DSList.length > 0) {
                        DSList[DSList.length - 1] = hisList[result.textIndex];
                    }

                    increaseAmount = result.increaseMount;
                    textIndex = result.textIndex;
                    tableIndex = result.tableIndex;
                    prevEventItem = currentPlayItem;

                    /* Add First DS in Quater to timerList */
                    if (quarter < 5) {
                        if (currentPlayItem.play) {
                            if (currentPlayItem.play.period) {
                                if (currentPlayItem.play.period.number == quarter) {
                                    timerList.push({
                                        label: quarter + "st (" + currentPlayItem.play.clock.displayValue + ")",
                                        value: matchEvtList.length - 1
                                    })
                                    quarter++;
                                }
                            }
                        }
                    }
                }
            }

            // if (result) {
            //     setSelTeamIdx(selectedTeamIdx)
            //     setTableScore(result.score);
            //     setSelTextIdx(textIndex);
            //     setSelTblIdx(tableIndex);
            //     setIncreaseAmt(increaseAmount);
            //     setDescription(result.description);
            //     setTime(result.sequenceTime);
            //     setHistoryList(hisList);
            //     prevHisList = hisList;

            //     setEventList(matchEvtList)
            //     setResultList(DSList);

            //     if (startTime == -1) {
            //         setTimeList(timerList);
            //     }
            // }

            // // console.log(team1Score, team2Score, 'team score')
            // if (team1Idx === 1) {
            //     setHomeScore(team1Score);
            //     setAwayScore(team2Score);
            // } else {
            //     setHomeScore(team2Score);
            //     setAwayScore(team1Score);
            // }

            selTeamIdx = selectedTeamIdx;
            tableScore = result.score;
            selTextIdx = textIndex;
            selTblIdx = tableIndex;
            increaseAmount = increaseAmount;
            description = result.description;
            time = result.sequenceTime;
            historyList = hisList
            winProbability = winProbabilityData;
            prevHisList = hisList;
            eventList = matchEvtList;
            resultList = DSList;

            if (team1Idx === 1) {
                homeScore = team1Score;
                awayScore = team2Score;
            } else {
                homeScore = team2Score;
                awayScore = team1Score;
            }
        }
    } else {
        // Collect DS in NFL and NCAAFB
        if (sportCategory == 'NFL' || sportCategory == 'NCAAFB') {
            let playsList = [];
            playsList = Array.isArray(resList?.drives?.previous) ? resList.drives.previous : [];
            for (let index = 0; index < playsList.length; index++) {
                /* Add offensivePlays to NFL plays list */
                let updatedList = playsList[index].plays.map(item => ({
                    ...item,
                    offensivePlays: playsList[index].offensivePlays
                }))
                resList.plays = mergeArrays(resList.plays, updatedList)
            }
            // console.log(resList.plays, "plays List")
        }

        if (team1Idx != -1 && resList.plays) {
            // console.log('Loop', resList.plays.length)

            for (let i = 0; i < resList.plays.length; i++) {
                // console.log(i,'Events List')
                let selectedDS = false;
                currentPlayItem = resList.plays[i];
                prevPlayItem = resList.plays[i - 1];
                nextPlayItem = null;
                if (i < resList.plays.length - 1) nextPlayItem = resList.plays[i + 1];

                /* Special DS (NHL) */
                if (sportCategory === 'NHL' || sportCategory === 'NHL3') {
                    if (currentPlayItem.type.id == 502) {
                        if (currentPlayItem.team) {
                            PREV_NHL_DS2 = {
                                id: 502,
                                seq: currentPlayItem.sequenceNumber,
                                teamId: currentPlayItem.team.id,
                                ...currentPlayItem
                            }
                        }
                    }

                    if (currentPlayItem.type.id == 516) {
                        PREV_NHL_DS5 = {
                            id: 516,
                            seq: currentPlayItem.sequenceNumber,
                            clock: currentPlayItem.clock,
                            ...currentPlayItem
                        }
                    }
                }

                let teamIndex = team1Idx;

                for (let j = 0; j < dataSetType.length; j++) {
                    // console.log(j,'Datatype')
                    var dataTypeItem = dataSetType[j];
                    var matchTeamId = team1Id;

                    /* If selected Team2 in dataTypes, set matchTeamId as team2Id */
                    if (dataTypeItem.teamId) {
                        matchTeamId = team2Id;
                    }

                    if (checkFunc(sportCategory, dataTypeItem, currentPlayItem, prevPlayItem, nextPlayItem, team1Id, team2Id, team1Name, team2Name, team1Abbre, team2Abbre, matchTeamId, PREV_NHL_DS2, PREV_NHL_DS5)) {
                        continue;
                    } else {
                        if (sportCategory === 'NHL' || sportCategory === 'NHL3') {
                            /* NHL-DS3 and NHL-DS3-1 Logic(more than 2 times) */
                            if (dataTypeItem.rotation) {
                                NHL_DS3_CNT = 0;
                            }

                            if (dataTypeItem.no === "NHL-DS3" || dataTypeItem.no === "NHL3-DS3" || dataTypeItem.no === "NHL3-DS5-1") {
                                NHL_DS3_TOTAL++;
                            }

                            if (dataTypeItem.no === "NHL-DS3" || dataTypeItem.no === "NHL3-DS3") {
                                NHL_DS3_CNT++;
                                if (NHL_DS3_CNT > 2) {
                                    continue;
                                }
                            }

                            if (dataTypeItem.no === "NHL-DS3-1" || dataTypeItem.no === "NHL3-DS3-1") {
                                if (NHL_DS3_CNT <= 2) {
                                    continue;
                                }
                            }
                        }

                        if (sportCategory === 'NBA') {
                            /* NBA2_DS1 and NBA2_DS4 Logic(more than 2 times) */
                            if (dataTypeItem.rotation) {
                                NBA2_DS1_CNT = 0;
                            }

                            if (dataTypeItem.no === "NBA2-DS1") {
                                NBA2_DS1_CNT++;
                                if (NBA2_DS1_CNT > 2) {
                                    continue;
                                }
                            }

                            if (dataTypeItem.no === "NBA2-DS4") {
                                if (NBA2_DS1_CNT <= 2) {
                                    continue;
                                }
                            }
                        }

                        if (sportCategory === 'NBA3') {
                            if (dataTypeItem.rotation && dataTypeItem.no != "NBA3-DS1-2-2") {
                                NBA3_DS1_2_CNT = 0;
                            }

                            if (dataTypeItem.no === "NBA3-DS1-2") {
                                NBA3_DS1_2_CNT++;
                                if (NBA3_DS1_2_CNT >= 2) {
                                    continue;
                                }
                            }

                            if (dataTypeItem.no === "NBA3-DS1-2-2") {
                                if (NBA3_DS1_2_CNT < 2) {
                                    // console.log(NBA3_DS1_2_CNT, 'NBA3-DS1-2-2')
                                    continue;
                                } else {
                                    NBA3_DS1_2_CNT = 0;
                                }
                            }
                        }

                        if (sportCategory === 'NCAABB2') {
                            if (dataTypeItem.rotation && dataTypeItem.no != "NCAABB2-DS1-1-1") {
                                NCAABB2_DS1_1_CNT = 0;
                            }

                            if (dataTypeItem.no === "NCAABB2-DS1-1") {
                                NCAABB2_DS1_1_CNT++;
                                if (NCAABB2_DS1_1_CNT >= 2) {
                                    continue;
                                }
                            }

                            if (dataTypeItem.no === "NCAABB2-DS1-1-1") {
                                if (NCAABB2_DS1_1_CNT < 2) {
                                    continue;
                                } else {
                                    NCAABB2_DS1_1_CNT = 0;
                                }
                            }
                        }

                        if (sportCategory === 'NHL2') {
                            /* 
                                NHL2_DS2 and NBA2_DS2-1 Logic(more than 2 times)
                            */

                            if (dataTypeItem.no === "NHL2_DS2") {
                                NHL2_DS2_CNT++;
                                if (NHL2_DS2_CNT > 2) {
                                    continue;
                                }
                            }

                            if (dataTypeItem.no === "NHL2_DS2-1") {
                                if (NHL2_DS2_CNT <= 2) {
                                    continue;
                                }
                            }
                        }

                        if (sportCategory === 'NFL' || sportCategory === 'NCAAFB' || sportCategory === 'NBA3' || sportCategory === 'NCAABB2' || sportCategory === 'MLB') {
                            // console.log(winProbabilityData, 'winProbabilityData');
                            if (getWinProbability(currentPlayItem, team1Id, resList.winprobability)) {
                                winProbabilityData = getWinProbability(currentPlayItem, team1Id, resList.winprobability)
                            }
                        }
                    }

                    if (!selectedDS) {
                        matchEvtList.push({
                            ...currentPlayItem,
                            prevPlayItem: prevPlayItem,
                            PREV_NHL_DS2,
                            PREV_NHL_DS5,
                        });
                    }

                    result = handleScore(sportCategory, currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name, resList.boxscore, NHL_DS3_TOTAL);
                    hisList = prevHisList;

                    /* For Logos */
                    selectedTeamIdx = teamIndex;
                    if (team1Id != matchTeamId) {
                        selectedTeamIdx = (parseInt(teamIndex) + 1) % 2;
                    }

                    /* If don't team check, set default team logo */
                    if (dataTypeItem.teamId == -1) {
                        selectedTeamIdx = -1
                    }

                    /* New table setting*/
                    if (tableIndex != result.tableIndex) {
                        hisList[result.tableIndex] = [];
                    }

                    let hisItem = {
                        no: dataTypeItem.no,
                        seq: currentPlayItem.sequenceNumber,
                        // teamId: currentPlayItem.team.id,
                        teamIdx: selectedTeamIdx,
                        score: result.score[result.textIndex],
                        rotation: dataTypeItem.rotation,
                        description: result.description,
                        increase: result.increaseMount,
                        winProbability: winProbabilityData
                    }

                    /* set reverse teamIdx for logo */
                    if (dataTypeItem.logoReverse) {
                        hisItem.teamIdx = changeTeamIdx(selectedTeamIdx);
                    }

                    /* Set time in history about every sport */
                    if (sportCategory === 'MLB') {
                        hisItem.time = currentPlayItem.period.displayValue.replace(new RegExp("\\b" + ' Inning' + "\\b", "gi"), '');
                    } else {
                        if (sportCategory == 'NHL' || sportCategory == 'NHL2' || sportCategory == 'NHL3') {
                            hisItem.time = reverseTime(currentPlayItem.clock.displayValue);
                        } else {
                            hisItem.time = currentPlayItem.clock.displayValue;
                        }
                    }

                    hisList[result.textIndex].push(hisItem);

                    if (dataTypeItem.rotation) {
                        DSList[DSList.length - 1] = hisList[result.textIndex];
                        DSList.push([])
                    } else if (DSList.length > 0) {
                        DSList[DSList.length - 1] = hisList[result.textIndex];
                    }

                    increaseAmount = result.increaseMount;
                    textIndex = result.textIndex;
                    tableIndex = result.tableIndex;
                    selectedDS = true;

                    /* Add First DS in Quater to timerList */
                    if (currentPlayItem.period.number == quarter) {
                        let timeItem = {
                            label: currentPlayItem.period.displayValue,
                            value: matchEvtList.length - 1
                        }

                        if (sportCategory === "MLB") {
                            timeItem.label = currentPlayItem.period.displayValue
                        } else {
                            if (sportCategory == 'NHL' || sportCategory == 'NHL2' || sportCategory == 'NHL3') {
                                timeItem.label = currentPlayItem.period.displayValue + ' ' + reverseTime(currentPlayItem.clock.displayValue);
                            } else {
                                timeItem.label = currentPlayItem.period.displayValue + ' ' + currentPlayItem.clock.displayValue
                            }
                        }

                        timerList.push(timeItem)
                        quarter++;
                    }
                }
            }

            selTeamIdx = selectedTeamIdx;
            tableScore = result?.score;
            selTextIdx = textIndex;
            selTblIdx = tableIndex;
            increaseAmount = increaseAmount;
            description = result?.description;
            time = result?.sequenceTime;
            historyList = hisList
            winProbability = winProbabilityData;
            prevHisList = hisList;
            eventList = matchEvtList;
            resultList = DSList;

            homeScore = result?.homeScore;
            awayScore = result?.awayScore;

            if (startTime == -1) {
                timeList = timerList;
            }
        }
    }
    
    res.json({
        selTeamIdx,
        tableScore,
        selTextIdx,
        selTblIdx,
        time,
        score,
        textIndex,
        tableIndex,
        playList,
        increaseAmount,
        description,
        history: historyList,
        winProbabilityData,
        prevHisList,
        eventList,
        resultList,

        homeScore,
        awayScore,
        timeList
    })
}