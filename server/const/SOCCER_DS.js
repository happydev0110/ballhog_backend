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
export const SOCCER_DS = [
    {//DataSet1 handballT1
        no: 'SOCCER-DS1',
        teamId: false,
        typeId: 122,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 1
    },
    {//DataSet2 HBT2
        no: 'SOCCER-DS2',
        teamId: true,
        typeId: 122,
        scoreValue: -1,
        Increase: 2,
        rotation: false,
        logo: 2
    },
    {//DataSet3 OST1
        no: 'SOCCER-DS3',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 1
    },
    {//DataSet4 OST2
        no: 'SOCCER-DS4',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false,
        logo: 2
    },
    {//DataSet7 FT1
        no: 'SOCCER-DS7',
        teamId: false,
        typeId: 66,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 1
    },
    {//DataSet8 FT2
        no: 'SOCCER-DS8',
        teamId: true,
        typeId: 66,
        scoreValue: -1,
        Increase: 2,
        rotation: false,
        logo: 2
    },
    {//DS8-1
        no: 'SOCCER-DS8-1',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 1
    },
    {//DS8-2
        no: 'SOCCER-DS8-2',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false,
        logo: 2
    },
    {//DataSet9 GT1
        no: 'SOCCER-DS9',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true,
        logo: 1
    },
    {//DataSet10 GT2
        no: 'SOCCER-DS10',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 2
    },
    {//DataSet11 SOGT1
        no: 'SOCCER-DS11',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: true,
        logo: 1
    },
    {//DataSet12 SOGT2
        no: 'SOCCER-DS12',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 2,
    },
    {//DataSet14 CT1
        no: 'SOCCER-DS14',
        teamId: -1,
        typeId: false,
        logo: 1,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet14-1 CT1
        no: 'SOCCER-DS14-1',
        teamId: -1,
        typeId: false,
        logo: 1,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet15 CT2
        no: 'SOCCER-DS15',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        logo: 2,
        Increase: false,
        rotation: true
    },
    // {//DataSet15-1 CT2
    //     no: 'SOCCER-DS15-1',
    //     teamId: -1,
    //     typeId: false,
    //     scoreValue: -1,
    //     logo: 2,
    //     Increase: false,
    //     rotation: true
    // },
    {//DataSet16 WWT1
        no: 'SOCCER-DS16',
        teamId: false,
        typeId: 136,
        scoreValue: -1,
        Increase: 2,
        rotation: false,
        logo: 1
    },
    // Not complete 
    {//DataSet17 Call Overturned
        no: 'SOCCER-DS17',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    // Not complete
    {//DataSet21 MISST1
        no: 'SOCCER-DS21',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 1
    },
    {//DataSet22 PKST2
        no: 'SOCCER-DS22',
        teamId: false,
        typeId: 114,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 2
    },
    {//DS22-1
        no: 'SOCCER-DS22-1',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true,
    },
    {//DS22-2
        no: 'SOCCER-DS22-2',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 3,
        rotation: false,
        logo: 2
    },
    {//DataSet23 PKST1
        no: 'SOCCER-DS23',
        teamId: true,
        typeId: 114,
        scoreValue: -1,
        Increase: 4,
        rotation: false,
        logo: 1
    },
    {//DataSet24 T1OG
        no: 'SOCCER-DS24',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 6,
        rotation: true,
        logo: 1
    },
    {//DataSet25 T2OG
        no: 'SOCCER-DS25',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true,
        logo: 2
    },
    {//DataSet27-1 delay
        no: 'SOCCER-DS27-1',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet27-2 delayover
        no: 'SOCCER-DS27-2',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet28-1 1sthalfbegins
        no: 'SOCCER-DS28-1',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    }, {//DataSet28-2 2ndhalfbegins
        no: 'SOCCER-DS28-2',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet28-3 1sthends
        no: 'SOCCER-DS28-3',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet28-4 match ends
        no: 'SOCCER-DS28-4',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet29 shotblockedT1
        no: 'SOCCER-DS29',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet30
        no: 'SOCCER-DS30',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
]
