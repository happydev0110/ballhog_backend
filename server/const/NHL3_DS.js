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
export const NHL3_DS = [
    {//DS2-1
        no: 'NHL3-DS2-1',
        teamId: false,
        typeId: 502,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS2-2
        no: 'NHL3-DS2-2',
        teamId: true,
        typeId: 502,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS3
        no: 'NHL3-DS3',
        teamId: false,
        typeId: 506,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS3-1
        no: 'NHL3-DS3-1',
        teamId: false,
        typeId: 506,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS3-2
        no: 'NHL3-DS3-2',
        teamId: true,
        typeId: 506,
        scoreValue: -1,
        Increase: -1,
        rotation: false
    },
    {//DS3-3
        no: 'NHL3-DS3-3',
        teamId: true,
        typeId: 506,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS4-1
        no: 'NHL3-DS4-1',
        teamId: -1,
        typeId: 516,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS5-1
        no: 'NHL3-DS5-1',
        teamId: false,
        typeId: 505,
        scoreValue: -1,
        Increase: 5,
        rotation: true
    },
    {//DS5-2
        no: 'NHL3-DS5-2',
        teamId: true,
        typeId: 505,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS6-1
        no: 'NHL3-DS6-1',
        teamId: -1,
        typeId: 518,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS6-2
        no: 'NHL3-DS6-2',
        teamId: -1,
        typeId: 519,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS7-1
        no: 'NHL3-DS7-1',
        teamId: false,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 1
    },
    {//DS7-1-1
        no: 'NHL3-DS7-1-1',
        teamId: false,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS7-2
        no: 'NHL3-DS7-2',
        teamId: true,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: false,
        logo: 2
    },
    {//DS7-3
        no: 'NHL3-DS7-3',
        teamId: false,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: false 
    },
    {//DS7-4
        no: 'NHL3-DS7-4',
        teamId: true,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS7-5
        no: 'NHL3-DS7-5',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS7-6
        no: 'NHL3-DS7-6',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS8-1
        no: 'NHL3-DS8-1',
        teamId: -1,
        typeId: 516,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS8-2
        no: 'NHL3-DS8-2',
        teamId: -1,
        typeId: 516,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS8-3
        no: 'NHL3-DS8-3',
        teamId: -1,
        typeId: 516,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS8-4
        no: 'NHL3-DS8-4',
        teamId: -1,
        typeId: 516,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
]
