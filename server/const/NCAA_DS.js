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
export const NCAA_DS = [
    {//DataSet1
        no: 'NCAA-DS1',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 3,
        rotation: false
    },
    {//DataSet2
        no: 'NCAA-DS2',
        teamId: false,
        typeId: 519,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet3
        no: 'NCAA-DS3',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DataSet3-2
        no: 'NCAA-DS3-2',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        // scoringPlayStatus: true,
        // scoringPlay: true,
        Increase: 2,
        rotation: true
    },
    {//DataSet4
        no: 'NCAA-DS4',
        teamId: false,
        typeId: 574,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 2,
        rotation: false
    },
    {//DataSet6
        no: 'NCAA-DS6',
        teamId: false,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 1,
        rotation: false
    },
    {//DataSet7
        no: 'NCAA-DS7',
        teamId: false,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: false,
        rotation: false
    },
    {//DataSet8
        no: 'NCAA-DS8',
        teamId: true,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: 1,
        rotation: false
    },
    {//DataSet9
        no: 'NCAA-DS9',
        // ncaa: 9,
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DataSet10
        no: 'NCAA-DS10',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DataSet10-2
        no: 'NCAA-DS10-2',
        teamId: true,
        typeId: false,
        scoreValue: 3,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: 1,
        rotation: false
    },
    {//DataSet11
        no: 'NCAA-DS11',
        teamId: true,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: false,
        rotation: false
    },
    {//DataSet12
        no: 'NCAA-DS12',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DataSet13
        no: 'NCAA-DS13',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DataSet14-1
        no: 'NCAA-DS14-1',
        teamId: false,
        typeId: 521,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet14-2
        no: 'NCAA-DS14-2',
        teamId: true,
        typeId: 521,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet15
        no: 'NCAA-DS15',
        teamId: true,
        typeId: 574,
        scoringPlayStatus: true,
        scoringPlay: true,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet16
        no: 'NCAA-DS16',
        teamId: false,
        typeId: 618,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
]
