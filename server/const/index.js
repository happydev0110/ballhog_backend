import { NBA3_DS } from './NBA3_DS.js';
import { NHL3_DS } from './NHL3_DS.js';
import { NCAA_DS } from './NCAA_DS.js';
import { NFL_DS } from './NFL_DS.js';
import { SOCCER_DS } from './SOCCER_DS.js';
import { NCAAFB_DS } from './NCAAFB_DS.js';
import { NCAABB2_DS } from './NCAABB2_DS.js';
import { MLB_DS } from './MLB_DS.js';

export const WIN_POINT_RULES = {
    5: 18,
    10: 36,
    25: 90,
    50: 180,
    100: 360
}

export const WIN_POINT_RULES_1V1 = {
    5: 9.5,
    10: 19,
    25: 47.5,
    50: 95,
    100: 190
}

export const PAYOUT = {
    1: '1V4',
    2: '1V1',
}

export const URL = {
    NCAA_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard',
    SOCCER_TODAY_EVENT: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard",
    MLB_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard',
    NFL_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard',
    NCAAFB_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard',

    NHL3_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard',
    NBA3_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    NCAABB2_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard',

    // https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary
    // EVENT_SCHEDULE: 'https://www.espn.com/nba/schedule',

    // Event API
    NCAA: "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary",
    SOCCER1: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/summary",
    SOCCER: 'https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/summary',
    // NCAA_SCORE_BOARD: "http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard"
    MLB: 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/summary',
    NFL: 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary',
    NCAAFB: 'https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary',

    NHL3: "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/summary",
    NBA3: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary",
    NCAABB2: 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary'
}

export const SPORTS_CATEGORY = [
    {
        label: 'NBA',
        value: 'NBA3',
    },
    {
        label: 'NCAA BB',
        value: 'NCAABB2',
    },
    {
        label: 'MLB',
        value: 'MLB',
    },
    {
        label: 'NHL',
        value: 'NHL3',
    },
    // {
    //     label: 'SOCCER',
    //     value: 'SOCCER',
    // },
    {
        label: 'NFL',
        value: 'NFL',
    },
    {
        label: 'NCAA FB',
        value: 'NCAAFB',
    }
]

export const INTERVAL_TIME = [
    {
        label: '3s',
        value: 3
    },
    {
        label: '4s',
        value: 4
    },
    {
        label: '5s',
        value: 5
    },
    {
        label: '6s',
        value: 6
    },
    {
        label: '7s',
        value: 7
    },
    {
        label: '8s',
        value: 8
    },
    {
        label: '9s',
        value: 9
    },
    {
        label: '10s',
        value: 10
    },
    {
        label: '20s',
        value: 20
    },
    {
        label: '30s',
        value: 30
    }
]

export const TEAM_LIST = [
    {
        label: 'Team1',
        value: 0,
    },
    {
        label: 'Team2',
        value: 1,
    },
    {
        label: 'Team3',
        value: 2,
    },
    {
        label: 'Team4',
        value: 3,
    },
]

export const DATASET_TYPE_CATEGORY = {
    NCAA: NCAA_DS,
    NHL3: NHL3_DS,
    SOCCER: SOCCER_DS,
    MLB: MLB_DS,
    NFL: NFL_DS,
    NCAAFB: NCAAFB_DS,

    NBA3: NBA3_DS,
    NCAABB2: NCAABB2_DS,
}

export const UNVALID_SOCCER_TEAMNAME = {
    'Brighton & Hove Albion':[
        'Brighton and Hove Albion',
        "BHA",                                  //Abbreviation
        "Brighton & Hove Albion",               //displayName
        "Brighton"                              //shortDisplayName
    ],
    'LAFC':[
        'Los Angeles Football Club',
        "LAFC",                                 //Abbreviation
        "LAFC",                                 //displayName
        "LAFC"                                  //shortDisplayName
    ],
    'Atlético Madrid':[
        'Atletico Madrid',
        "ATM",                                  //Abbreviation
        "Atlético Madrid",                      //displayName
        "Atlético"                              //shortDisplayName
    ],
    'Bayer Leverkusen':[
        'Bayer 04 Leverkusen',
        "B04",                                  //Abbreviation
        "Bayer Leverkusen",                     //displayName
        "Leverkusen"                            //shortDisplayName
    ],
    'Paris Saint-Germain':[
        'Paris Saint Germain',
        "PSG",                                  //Abbreviation
        "Paris Saint-Germain",                  //displayName
        "PSG"                                   //shortDisplayName
    ],
    'FC Juarez':[
        'Juárez',
        "JUA",                                  //Abbreviation
        "FC Juarez",                            //displayName
        "Juarez"                                //shortDisplayName
    ],
    'Atlético de San Luis':[
        'Atlético San Luis',
        "ASL",                                  //Abbreviation
        "Atlético de San Luis",                 //displayName
        "Atl. San Luis"                         //shortDisplayName
    ],
    'Bay FC':[
        'Bay',
        "BAY",                                  //Abbreviation
        "Bay FC",                               //displayName
        "Bay FC"                                //shortDisplayName
    ],
    'Alavés':[
        'Alaves',
        "ALA",                                  //Abbreviation
        "Alavés",                               //displayName
        "Alavés"                                //shortDisplayName
    ],
    'Leganés':[
        'Leganes',
        "LEG",                                  //Abbreviation
        "Leganés",                              //displayName
        "Leganés"                               //shortDisplayName
    ],
}