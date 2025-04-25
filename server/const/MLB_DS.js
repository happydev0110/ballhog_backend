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
export const MLB_DS = [
    {//DS1
        no: 'MLB-DS1',
        teamId: false,
        typeId: 1,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS1-2
        no: 'MLB-DS1-2',
        teamId: true,
        typeId: 1,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS2
        no: 'MLB-DS2',
        teamId: -1,
        typeId: 59,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    // {//DS2-1
    //     no: 'MLB-DS2-1',
    //     teamId: -1,
    //     typeId: 59,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: false
    // },
    {//DS3
        no: 'MLB-DS3',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    // {//DS3-2
    //     no: 'MLB-DS3-2',
    //     teamId: -1,
    //     typeId: false,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: true
    // },
    {//DS4
        no: 'MLB-DS4',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS4-2
        no: 'MLB-DS4-2',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS4-3
        no: 'MLB-DS4-3',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS6
        no: 'MLB-DS6',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS6-1
        no: 'MLB-DS6-1',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS7
        no: 'MLB-DS7',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS8
        no: 'MLB-DS8',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: true
    },
    {//DS10
        no: 'MLB-DS10',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: true
    },
    {//DS11
        no: 'MLB-DS11',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS11-2
        no: 'MLB-DS11-2',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS12
        no: 'MLB-DS12',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS13
        no: 'MLB-DS13',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 5,
        rotation: false
    },
    {//DS14
        no: 'MLB-DS14',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS15
        no: 'MLB-DS15',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS16
        no: 'MLB-DS16',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS16-1
        no: 'MLB-DS16-1',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS17
        no: 'MLB-DS17',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS17-1
        no: 'MLB-DS17-1',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS18
        no: 'MLB-DS18',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS19
        no: 'MLB-DS19',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS19-1
        no: 'MLB-DS19-1',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS21
        no: 'MLB-DS21',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS21-1
        no: 'MLB-DS21-1',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS22
        no: 'MLB-DS22',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS23
        no: 'MLB-DS23',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 5,
        rotation: false
    },
    {//DS24
        no: 'MLB-DS24',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS25
        no: 'MLB-DS25',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS26
        no: 'MLB-DS26',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS27
        no: 'MLB-DS27',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS27-2
        no: 'MLB-DS27-2',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS28
        no: 'MLB-DS28',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS29
        no: 'MLB-DS29',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS30
        no: 'MLB-DS30',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS31
        no: 'MLB-DS31',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS32
        no: 'MLB-DS32',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS33
        no: 'MLB-DS33',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS34
        no: 'MLB-DS34',
        teamId: -1,
        typeId: 58,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
]