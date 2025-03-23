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
export const NBA3_DS = [
    {//DS1-1
        no: 'NBA3-DS1-1',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        Increase: 3,
        rotation: false
    },
    {//DS1-2
        no: 'NBA3-DS1-2',
        teamId: false,
        typeId: false,
        scoreValue: 0,
        Increase: -1,
        rotation: false
    },
    {//DS1-2-2
        no: 'NBA3-DS1-2-2',
        teamId: false,
        typeId: false,
        scoreValue: 0,
        Increase: -1,
        rotation: true
    },
    {//DS1-3
        no: 'NBA3-DS1-3',
        logo: 1,
        teamId: true,
        typeId: false,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS2-1
        no: 'NBA3-DS2-1',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS2-2
        no: 'NBA3-DS2-2',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS3
        no: 'NBA3-DS3',
        noMatchList: [96, 116, 115, 150, 118, 138, 149],
        teamId: false,
        typeId: false,
        scoreValue: 2,
        Increase: 3,
        rotation: false
    },
    {//DS3-1
        no: 'NBA3-DS3-1',
        teamId: true,
        typeId: false,
        scoreValue: 2,
        Increase: false,
        rotation: true
    },
    {//DS4-1
        no: 'NBA3-DS4-1',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS4-2
        no: 'NBA3-DS4-2',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS5-1
        no: 'NBA3-DS5-1',
        logo: 2,
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS5-2
        no: 'NBA3-DS5-2',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS6-1
        no: 'NBA3-DS6-1',
        matchList: [412, 401, 16],
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS7-1
        no: 'NBA3-DS7-1',
        teamId: -1,
        typeId: 615,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS8-1
        no: 'NBA3-DS8-1',
        teamId: true,
        typeId: false,
        logoReverse: true,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS9-1
        no: 'NBA3-DS9-1',
        noMatchList: [62, 63, 84],
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
]
