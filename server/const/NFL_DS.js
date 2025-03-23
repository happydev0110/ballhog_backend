/*
    no: (String)
    teamId: (-1:'No Compare' false:team1, true:team2)
    typeId: (false: 'No Compare', Int: 'Compare')
    scoreValue: (-1: 'No Compare', Int: 'Compare')
    scoringPlayStatus: (false: 'No compare',true: 'compare')
    scoringPlay: (true, false)
    Increase: (false: 'No Increase', Int: 'Increase', -1: previous event scoreValue Increase)
    roataion: (false: 'No Rotation', true: 'Rotation')
    logoReverse: (false: 'No Change', true: 'Next Logo')
    logo: (1: team1, 2: team2)
*/
export const NFL_DS = [
    {//DS4
        no: 'NFL-DS4',
        matchList: [24, 67, 5, 68, 3],
        logo: 1,
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS1
        no: 'NFL-DS1',
        matchList: [53, 12],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS1-1
        no: 'NFL-DS1-1',
        matchList: [53, 12],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS1-2
        no: 'NFL-DS1-2',
        matchList: [53, 12],
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS1-3
        no: 'NFL-DS1-3',
        matchList: [53, 12],
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    // {//DS1-4 kickoff TDT1 +xp
    //    no: 'NFL-DS1-4',
    //    matchList: [12, 32],
    //   logo: 1,
    //    teamId: true,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    // {//DS1-5 kickoff TDT1 - XP
    //    no: 'NFL-DS1-5',
    //    logo: 1,
    //    teamId: true,
    //    typeId: 12,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    // {//DS1-6
    //     no: 'NFL-DS1-6',
    //     teamId: false,
    //     logo: 2,
    //     typeId: 12,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: true
    //},
    //{//DS1-6-6 KO, TD, T2
    //    no: 'NFL-DS1-6-6',
    //    teamId: -1,
    //    logo: 2,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: false,
    //    rotation: true
    //},
    {//DS1-7
        no: 'NFL-DS1-7',
        matchList: [53, 12, 32],
        logo: 1,
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    //{//DS1-8 T1 kicksto T2, T2TO, T1TD +XP 
    //    no: 'NFL-DS1-8',
    //    matchList: [53, 12],
    //    teamId: false,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    //{//DS1-9 T1 kicksto T2, T2TO, T1TD -XP 
    //    no: 'NFL-DS1-9',
    //    matchList: [53, 12],
    //    teamId: false,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    //{//DS1-9-9 T2 kicksto T1, T1TO, T2TD 
    //    no: 'NFL-DS1-9-9',
    //    matchList: [53, 12],
    //    teamId: true,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: false,
    //    rotation: true
    //},
    {//DS2-1
        no: 'NFL-DS2-1',
        teamId: false,
        typeId: 24,
        scoreValue: -1,
        Increase: 3,
        rotation: true,
    },
    {//DS2-2
        no: 'NFL-DS2-2',
        teamId: false,
        typeId: 5,
        scoreValue: -1,
        Increase: 3,
        rotation: true,
    },
    {//DS3-1
        no: 'NFL-DS3-1',
        teamId: false,
        typeId: 24,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS3-2
        no: 'NFL-DS3-2',
        teamId: false,
        typeId: 5,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS3-2-2
        no: 'NFL-DS3-2-2',
        teamId: false,
        typeId: 9,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS3-2-4
        no: 'NFL-DS3-2-4',
        teamId: false,
        typeId: 9,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS3-6-6
        no: 'NFL-DS3-6-6',
        teamId: false,
        typeId: 24,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS3-6-7
        no: 'NFL-DS3-6-7',
        teamId: false,
        typeId: 24,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS3-6-8
        no: 'NFL-DS3-6-8',
        teamId: false,
        typeId: 5,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS3-6-9
        no: 'NFL-DS3-6-9',
        teamId: false,
        typeId: 5,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS5
        no: 'NFL-DS5',
        matchList: [74, 21],
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    //{//DS6-1 td rush + xp
    //    no: 'NFL-DS6-1',
    //    teamId: false,
    //    typeId: 68,
    //   scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    //{//DS6-2 td rush - xp
    //    no: 'NFL-DS6-2',
    //    teamId: false,
    //    typeId: 68,
    //   scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    {//DS6-4 TDT1
        no: 'NFL-DS6-4',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true,
        logo: 1,
        // logoReverse: true
    },
    {//DS6-5 TDT2
        no: 'NFL-DS6-5',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 2,
        // logoReverse: true
    },
    //{//DS7-1 td pass +xp
    //    no: 'NFL-DS7-1',
    //    teamId: false,
    //    typeId: 67,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    //{//DS7-2 td pass -xp
    //    no: 'NFL-DS7-2',
    //    teamId: false,
    //    typeId: 67,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    {//DS8
        no: 'NFL-DS8',
        teamId: false,
        typeId: 59,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS8-1
        no: 'NFL-DS8-1',
        teamId: false,
        typeId: 59,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS9
        no: 'NFL-DS9',
        teamId: false,
        typeId: 59,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS10
        no: 'NFL-DS10',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    //{//DS10-1 punt T1, fumble T2, TD T1+xp
    //    no: 'NFL-DS10-1',
    //    teamId: false,
    //    typeId: 52,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    {//DS10-1-1
        no: 'NFL-DS10-1-1',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS10-1-2
        no: 'NFL-DS10-1-2',
        teamId: false,
        typeId: 9,
        scoringPlay: false,
        Increase: 0,
        rotation: true,
        logo: 1,
    },
    //{//DS10-1-3 t1 punts to t2, fumble recovered by t2, T2 TD
    //    no: 'NFL-DS10-1-3',
    //    teamId: false,
    //    typeId: 9,
    //    scoringPlay: true,
    //    Increase: 0,
    //    rotation: true,
    //    logo: 1,
    //},
    //{//DS10-2 punt T1, fumble T2, TD, T1 -xp
    //    no: 'NFL-DS10-2',
    //    teamId: false,
    //    typeId: 52,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    {//DS10-2-1
        no: 'NFL-DS10-2-1',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    //{//DS10-3 punt T2, TD T1, +XP
    //    no: 'NFL-DS10-3',
    //    logo: 1,
    //    teamId: true,
    //    logoReverse: true,
    //    typeId: 52,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    //{//DS10-4 punt T2, TD T1, -XP
    //    no: 'NFL-DS10-4',
    //    teamId: true,
    //    logoReverse: true,
    //    typeId: 52,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    {//DS10-5
        no: 'NFL-DS10-5',
        teamId: true,
        logoReverse: true,
        typeId: 52,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS10-6
        no: 'NFL-DS10-6',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    //{//DS10-9 punt blocked by T1 = TD
    //    no: 'NFL-DS10-9',
    //    teamId: true,
    //    logoReverse: true,
    //    typeId: 17,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    {//DS11
        no: 'NFL-DS11',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS11-1-2
        no: 'NFL-DS11-1-2',
        teamId: false,
        typeId: 9,
        logo: 1,
        scoreValue: -1,
        scoringPlay: false,
        Increase: 0,
        rotation: true
    },
    {//DS12
        no: 'NFL-DS12',
        matchList: [26, 29, 36, 7],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    //{//DS12-1 TOT1, TDT2
    //    no: 'NFL-DS12-1',
    //    matchList: [32, 34],
    //    logo: 2,
    //    teamId: false,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: false,
    //    rotation: true,
    //    logoReverse: true
    //},
    {//DS12-2
        no: 'NFL-DS12-2',
        matchList: [26, 29, 36, 7],
        logo: 2,
        teamId: true,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS12-3
        no: 'NFL-DS12-3',
        matchList: [26, 29, 36, 7],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS12-4
        no: 'NFL-DS12-4',
        teamId: -1,
        typeId: 24,
        logo: 1,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS12-5
        no: 'NFL-DS12-5',
        teamId: -1,
        typeId: 24,
        logo: 1,
        logoReverse: true,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DS12-6
        no: 'NFL-DS12-6',
        teamId: false,
        logo: 2,
        scoreValue: -1,
        Increase: 0,
        rotation: true
    },
    {//DS13
        no: 'NFL-DS13',
        teamId: true,
        logoReverse: true,
        typeId: 7,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS13-1
        no: 'NFL-DS13-1',
        teamId: true,
        logoReverse: true,
        typeId: 9,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS13-2
        no: 'NFL-DS13-2',
        matchList: [5, 24, 9],
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS13-3
        no: 'NFL-DS13-3',
        matchList: [5, 24, 9],
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS14
        no: 'NFL-DS14',
        teamId: true,
        typeId: 52,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS14-1
        no: 'NFL-DS14-1',
        teamId: true,
        logoReverse: true,
        logo: 1,
        typeId: 52,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    //{//DS14-1-1 T2 Punt no score TB
    //    no: 'NFL-DS14-1-1',
    //    teamId: true,
    //    typeId: 52,
    //    scoreValue: -1,
    //    Increase: 3,
    //    rotation: true
    //},
    {//DS14-2
        no: 'NFL-DS14-2',
        matchList: [52, 34],
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: 52,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS15
        no: 'NFL-DS15',
        matchList: [26, 29],
        logoReverse: true,
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS15-3
        no: 'NFL-DS15-3',
        teamId: true,
        typeId: false,
        logo: 1,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS16
        no: 'NFL-DS16',
        matchList: [26, 29, 36],
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    //{//DS16-1 def TD T1 + XP
    //    no: 'NFL-DS16-1',
    //    matchList: [52, 12, 32, 17],
    //    logo: 1,
    //    teamId: true,
    //    logoReverse: true,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    //{//DS17-1 def TD T1 -XP
    //    no: 'NFL-DS17-1',
    //    matchList: [52, 12],
    //    logo: 1,
    //    teamId: true,
    //    logoReverse: true,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    {//DS18
        no: 'NFL-DS18',
        teamId: true,
        typeId: 60,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS18-1
        no: 'NFL-DS18-1',
        teamId: false,
        logo: 1,
        typeId: 18,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS19
        no: 'NFL-DS19',
        teamId: true,
        typeId: 59,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS19-1
        no: 'NFL-DS19-1',
        teamId: true,
        typeId: 59,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    //{//DS20 TDT2
    //    no: 'NFL-DS20',
    //    matchList: [68, 67],
    //    teamId: true,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: false,
    //    rotation: true
    //},
    {//DS20-4
        no: 'NFL-DS20-4',
        teamId: true,
        typeId: 9,
        scoreValue: -1,
        Increase: 0,
        rotation: true,
        logo: 2,
        scoringPlay: true,
    },
    {//DS21-1
        no: 'NFL-DS21-1',
        teamId: true,
        typeId: 5,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS21-1-1
        no: 'NFL-DS21-1-1',
        teamId: true,
        typeId: 5,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS21-2
        no: 'NFL-DS21-2',
        teamId: true,
        typeId: 24,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS21-2-2
        no: 'NFL-DS21-2-2',
        teamId: true,
        typeId: 24,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS21-3
        no: 'NFL-DS21-3',
        teamId: true,
        typeId: 9,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS21-6
        no: 'NFL-DS21-6',
        matchList: [5, 24, 7, 3, 8, 9],
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS22
        no: 'NFL-DS22',
        teamId: false,
        matchList: [60, 18],
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS23
        no: 'NFL-DS23',
        teamId: -1,
        typeId: 65,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS24-1-1
        no: 'NFL-DS24-1-1',
        matchList: [5, 24, 7, 3, 8, 9],
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS24-1-2
        no: 'NFL-DS24-1-2',
        matchList: [5, 24, 7, 3, 8, 9],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS24-1-1-1
        no: 'NFL-DS24-1-1-1',
        matchList: [5, 24, 7, 3, 8, 9],
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS24-1
        no: 'NFL-DS24-1',
        matchList: [52, 59, 60, 67, 68, 26, 29, 36, 74, 21, 75, 65, 2, 53, 18],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    //{//DS24-2 4th down fail team2 +td+xp
    //    no: 'NFL-DS24-2',
    //   matchList: [5, 24, 7, 3, 8, 9],
    //    logo: 1,
    //    teamId: true,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    //{//DS24-2-3 4th down fail team2 +td-xp
    //    no: 'NFL-DS24-2-3',
    //    matchList: [5, 24, 7, 3, 8, 9],
    //    logo: 1,
    //    teamId: true,
    //    typeId: false,
    //    scoreValue: -1,
    //    Increase: 6,
    //    rotation: true
    //},
    {//DS25
        no: 'NFL-DS25',
        teamId: false,
        logo: 2,
        typeId: 20,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS26
        no: 'NFL-DS26',
        teamId: true,
        logo: 1,
        typeId: 20,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS27
        no: 'NFL-DS27',
        teamId: true,
        logo: 1,
        logoReverse: true,
        typeId: 7,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS29
        no: 'NFL-DS29',
        teamId: -1,
        typeId: 66,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS30
        no: 'NFL-DS30',
        teamId: -1,
        typeId: 75,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS31
        no: 'NFL-DS31',
        teamId: -1,
        typeId: 2,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS32
        no: 'NFL-DS32',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS32-1
        no: 'NFL-DS32-1',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS33
        no: 'NFL-DS33',
        teamId: false,
        typeId: 24,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS33-1
        no: 'NFL-DS33-1',
        teamId: false,
        typeId: 24,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS34
        no: 'NFL-DS34',
        teamId: false,
        typeId: 5,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS34-1
        no: 'NFL-DS34-1',
        teamId: false,
        typeId: 5,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS40
        no: 'NFL-DS40',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS40-1
        no: 'NFL-DS40-1',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
]
