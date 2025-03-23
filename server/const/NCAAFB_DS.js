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
export const NCAAFB_DS = [
    {//DS4-1
        no: 'NCAAFB-DS4-1',
        matchList: [24, 67, 5, 68, 3],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS1
        no: 'NCAAFB-DS1',
        matchList: [53, 12],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS1-1
        no: 'NCAAFB-DS1-1',
        matchList: [53, 12],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS1-1-1
        no: 'NCAAFB-DS1-1-1',
        scoringPlay: false,
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: false,
        logo: 1,
    },
    {//DS1-2
        no: 'NCAAFB-DS1-2',
        matchList: [53, 12],
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS1-2-2
        no: 'NCAAFB-DS1-2-2',
        scoringPlay: false,
        logo: 2,
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 0,
        rotation: true
    },
    {//DS1-3
        no: 'NCAAFB-DS1-3',
        matchList: [53, 12],
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS1-4
        no: 'NCAAFB-DS1-4',
        matchList: [53, 32],
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS1-5
        no: 'NCAAFB-DS1-5',
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: 32,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS1-6
        no: 'NCAAFB-DS1-6',
        logo: 2,
        teamId: false,
        logoReverse: true,
        typeId: 32,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS1-7
        no: 'NCAAFB-DS1-7',
        matchList: [53, 32],
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: 12,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS1-8
        no: 'NCAAFB-DS1-8',
        matchList: [53, 12],
        logo: 1,
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS1-9
        no: 'NCAAFB-DS1-9',
        matchList: [53, 12],
        logo: 1,
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS1-9-9
        no: 'NCAAFB-DS1-9-9',
        matchList: [53, 12],
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS2-1-1
        no: 'NCAAFB-DS2-1-1',
        teamId: false,
        typeId: 24,
        scoreValue: -1,
        Increase: 3,
        rotation: true,
    },
    {//DS2-2-2
        no: 'NCAAFB-DS2-2-2',
        teamId: false,
        typeId: 5,
        scoreValue: -1,
        Increase: 3,
        rotation: true,
    },
    {//DS3-1-1
        no: 'NCAAFB-DS3-1-1',
        teamId: false,
        typeId: 24,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS3-2-2
        no: 'NCAAFB-DS3-2-2',
        teamId: false,
        typeId: 5,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS3-3-3
        no: 'NCAAFB-DS3-3-3',
        matchList: [3, 7, 8],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    // {//DS3-4
    //     no: 'NCAAFB-DS3-4',
    //     matchList: [3, 7, 8],
    //     teamId: false,
    //     typeId: false,
    //     scoreValue: -1,
    //     Increase: 3,
    //     rotation: false
    // },
    {//DS5
        no: 'NCAAFB-DS5',
        matchList: [74, 21],
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS6-1
        no: 'NCAAFB-DS6-1',
        teamId: false,
        typeId: 68,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS6-2
        no: 'NCAAFB-DS6-2',
        teamId: false,
        typeId: 68,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS7-1
        no: 'NCAAFB-DS7-1',
        teamId: false,
        typeId: 67,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS7-2
        no: 'NCAAFB-DS7-2',
        teamId: false,
        typeId: 67,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS8
        no: 'NCAAFB-DS8',
        teamId: false,
        typeId: 59,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS8-1
        no: 'NCAAFB-DS8-1',
        teamId: false,
        typeId: 59,
        scoreValue: -1,
        Increase: 1,
        rotation: true
    },
    {//DS9
        no: 'NCAAFB-DS9',
        teamId: false,
        typeId: 59,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS10
        no: 'NCAAFB-DS10',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS10-1
        no: 'NCAAFB-DS10-1',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS10-2
        no: 'NCAAFB-DS10-2',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS10-3
        no: 'NCAAFB-DS10-3',
        matchList: [52, 34],
        teamId: true,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS10-4
        no: 'NCAAFB-DS10-4',
        matchList: [52, 34],
        teamId: true,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS10-5
        no: 'NCAAFB-DS10-5',
        teamId: true,
        logoReverse: true,
        typeId: 52,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS10-6
        no: 'NCAAFB-DS10-6',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS10-7
        no: 'NCAAFB-DS10-7',
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: 52,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS11
        no: 'NCAAFB-DS11',
        teamId: false,
        typeId: 52,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    // {//DS11-1
    //    no: 'NCAAFB-DS11-1',
    //    teamId: false,
    //    typeId: 52,
    //    scoreValue: -1,
    //    Increase: 1,
    //    rotation: true
    // },
    {//DS12
        no: 'NCAAFB-DS12',
        matchList: [26, 29, 36, 63],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS12-1
        no: 'NCAAFB-DS12-1',
        matchList: [32, 34],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS13
        no: 'NCAAFB-DS13',
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: 7,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS13-1
        no: 'NCAAFB-DS13-1',
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
        no: 'NCAAFB-DS13-3',
        logo: 1,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false,
        teamId: true,
    },
    {//DS13-1-1
        no: 'NCAAFB-DS13-1-1',
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
        no: 'NCAAFB-DS14',
        logo: 1,
        teamId: true,
        typeId: 52,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS14-1
        no: 'NCAAFB-DS14-1',
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: 52,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    // {//DS14-2
    //     no: 'NCAAFB-DS14-2',
    //     matchList: [52, 34],
    //     teamId: true,
    //     logo: 1,
    //     typeId: false,
    //     scoreValue: -1,
    //     Increase: 3,
    //     rotation: false
    // },
    {//DS15
        no: 'NCAAFB-DS15',
        matchList: [26, 29, 63],
        logo: 1,
        teamId: true,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS16
        no: 'NCAAFB-DS16',
        matchList: [26, 29, 36],
        logo: 1,
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS16-1
        no: 'NCAAFB-DS16-1',
        logo: 1,
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS17-1
        no: 'NCAAFB-DS17-1',
        logo: 1,
        teamId: true,
        typeId: 36,
        scoreValue: -1,
        Increase: 6,
        rotation: true
    },
    {//DS18
        no: 'NCAAFB-DS18',
        teamId: true,
        typeId: 60,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS19
        no: 'NCAAFB-DS19',
        teamId: true,
        typeId: 59,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS19
        no: 'NCAAFB-DS19-1',
        logo: 1,
        teamId: true,
        typeId: 59,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS20
        no: 'NCAAFB-DS20',
        matchList: [68, 67],
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS21-1
        no: 'NCAAFB-DS21-1',
        teamId: true,
        typeId: 5,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS21-2
        no: 'NCAAFB-DS21-2',
        teamId: true,
        typeId: 24,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS21-3
        no: 'NCAAFB-DS21-3',
        teamId: true,
        typeId: 8,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS22
        no: 'NCAAFB-DS22',
        teamId: false,
        typeId: 60,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS23
        no: 'NCAAFB-DS23',
        teamId: -1,
        typeId: 65,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS24-2
        no: 'NCAAFB-DS24-2',
        matchList: [5, 24, 3, 7, 9],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS24-3
        no: 'NCAAFB-DS24-3',
        matchList: [5, 24, 3, 7, 9],
        teamId: true,
        logoReverse: true,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS25
        no: 'NCAAFB-DS25',
        teamId: false,
        logoReverse: true,
        logo: 2,
        typeId: 20,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS26
        no: 'NCAAFB-DS26',
        teamId: true,
        logoReverse: true,
        logo: 1,
        typeId: 20,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS27
        no: 'NCAAFB-DS27',
        teamId: true,
        logo: 1,
        typeId: 7,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS29
        no: 'NCAAFB-DS29',
        teamId: -1,
        typeId: 66,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS30
        no: 'NCAAFB-DS30',
        teamId: -1,
        typeId: 75,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS31
        no: 'NCAAFB-DS31',
        teamId: -1,
        typeId: 2,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS32
        no: 'NCAAFB-DS32',
        teamId: -1,
        typeId: 70,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
]