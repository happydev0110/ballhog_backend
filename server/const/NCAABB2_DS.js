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
export const NCAABB2_DS = [
    {//DS1
        no: 'NCAABB2-DS1',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 3,
        rotation: false
    },
    {//DS1-1
        no: 'NCAABB2-DS1-1',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        scoringPlay: false,
        Increase: -1,
        rotation: false
    },
    {//DS1-1
        no: 'NCAABB2-DS1-1-1',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        scoringPlay: false,
        Increase: -1,
        rotation: true
    },
    {//DS2
        no: 'NCAABB2-DS2',
        teamId: true,
        typeId: false,
        scoreValue: 3,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: 1,
        rotation: false
    },
    {//DS3
        no: 'NCAABB2-DS3',
        teamId: false,
        typeId: 574,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 3,
        rotation: false
    },
    {//DS4
        no: 'NCAABB2-DS4',
        teamId: false,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 1,
        rotation: false
    },
    {//DS5
        no: 'NCAABB2-DS5',
        teamId: false,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: false,
        rotation: true
    },
    {//DS6
        no: 'NCAABB2-DS6',
        teamId: true,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: false,
        rotation: false
    },
    {//DS7
        no: 'NCAABB2-DS7',
        teamId: true,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: 2,
        rotation: false
    },
    {//DS9
        no: 'NCAABB2-DS9',
        teamId: true,
        typeId: 574,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS10
        no: 'NCAABB2-DS10',
        teamId: false,
        typeId: 618,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS12
        no: 'NCAABB2-DS12',
        teamId: false,
        typeId: 598,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS13
        no: 'NCAABB2-DS13',
        teamId: false,
        typeId: 519,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS14-1
        no: 'NCAABB2-DS14-1',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS16
        no: 'NCAABB2-DS16',
        teamId: false,
        typeId: 521,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS17
        no: 'NCAABB2-DS17',
        teamId: true,
        typeId: 521,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS19
        no: 'NCAABB2-DS19',
        matchList: [412, 578, 579, 580],
        typeId: false,
        teamId: -1,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
]
