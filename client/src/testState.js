export const initialState ={
    user: {
        id: 1,
        name: 'Fake',
        team: 'Blue',
        company: 'FM',
        suporg:['Operations'],
    },
    spanishidden: false,
    allrows: [],
    authorized:false,
    coachingVisible: false,
    coachingModal: false,
    talentCategories: ["Safety", "Quality", "Team Work", "Productivity", "Reliability"],
    activeTM: {
        name:'Jim TM',
        tmNum: 2002,
        department: 'Finishing',
        doh: new Date(2018,2,11),
        coaching: 4,
        step: 1,
        recognition: 3,
        coachingnotes: [
            {
                enteringLeaderID: 1,  
                coachingDate: new Date(2020,3,4).toDateString(),
                talentGroup: 'Safety',
                notetype: 'Coaching',
                note: "this guy isn't getting it",
            },
            {
                enteringLeaderID: 1,
                coachingDate: new Date(2020,3,4).toDateString(),
                talentGroup: 'Reliability',
                notetype: 'Coaching',
                note: "Jim was late",
            },
            {
                enteringLeaderID: 1,
                coachingDate: new Date(2020,3,4).toDateString(),
                talentGroup: 'Safety',
                notetype: 'Coaching',
                note: "Jim needs to put his phone away",
            },
            {
                enteringLeaderID: 1,
                coachingDate: new Date(2020,3,4).toDateString(),
                talentGroup: 'Reliability',
                notetype: 'Coaching',
                note: "Jim was late"
            }
        ],
        recognitionNotes: [
            {
                enteringLeaderID: 2,
                coachingDate: 5-4-2020,
                talentGroup: 'Teamwork',
                notetype: 'Recognition',
                note: "TM helped another TM with spill",
            },
            {
                enteringLeaderID: 1,
                coachingDate: 10-4-2020,
                talentGroup: 'Production',
                notetype: 'Recognition',
                note: "TM exceeded expectation by 10%",
            },
            {
                enteringLeaderID: 1,
                coachingDate: 10-14-2020,
                talentGroup: 'Teamwork',
                notetype: 'Recognition',
                note: "TM was cleaning machine during downtime",
            },
        ]
    },
}


export const testData ={
    leaders: [
        {
            username: 'Eric', 
            team: 'Blue',
            suporg: 'Operations',
            company: 'FM',
            userID: 1
        },
        {
            username: 'Jim', 
            team: 'Red',
            suporg: 'Distribution',
            company: 'FM',
            userID: 2
        },
        {
            username: 'Gwendolyn', 
            team: 'Green',
            suporg: 'Admin',
            company: 'FM',
            userID: 3
        },
        {
            username: 'Sarah', 
            team: 'Red',
            suporg: 'Distribution',
            company: 'FM',
            userID: 4
        }
    ],
    teammembers: [
        {
            name:'Jim TM',
            tmNum: 2002,
            department: 'Finishing',
            doh: 3-5-2018,
            coaching: 4,
            step: 1,
            recognition: 3,
            coachingnotes: [
                {
                    enteringLeaderID: 1,
                    coachingDate: 3-4-2020,
                    talentGroup: 'Safety',
                    notetype: 'Coaching',
                    note: "this guy isn't getting it",
                },
                {
                    enteringLeaderID: 1,
                    coachingDate: 10-4-2020,
                    talentGroup: 'Reliability',
                    notetype: 'Coaching',
                    note: "Jim was late",
                },
                {
                    enteringLeaderID: 1,
                    coachingDate: 9-4-2020,
                    talentGroup: 'Safety',
                    notetype: 'Coaching',
                    note: "Jim needs to put his phone away",
                },
                {
                    enteringLeaderID: 1,
                    coachingDate: 7-4-2020,
                    talentGroup: 'Reliability',
                    notetype: 'Coaching',
                    note: "Jim was late"
                }
            ],
            recognitionNotes: [
                {
                    enteringLeaderID: 2,
                    coachingDate: 5-4-2020,
                    talentGroup: 'Teamwork',
                    notetype: 'Recognition',
                    note: "TM helped another TM with spill",
                },
                {
                    enteringLeaderID: 1,
                    coachingDate: 10-4-2020,
                    talentGroup: 'Production',
                    notetype: 'Recognition',
                    note: "TM exceeded expectation by 10%",
                },
                {
                    enteringLeaderID: 1,
                    coachingDate: 10-14-2020,
                    talentGroup: 'Teamwork',
                    notetype: 'Recognition',
                    note: "TM was cleaning machine during downtime",
                },
            ]
        },
        {
            name:'Susan TM',
            tmNum: 2235,
            department: 'Shipping',
            doh: 10-5-2018,
            coaching: 2,
            step: 0,
            recognition: 4,
            coachingnotes: [
                {
                    enteringLeaderID: 1,
                    coachingDate: 3-4-2020,
                    talentGroup: 'Safety',
                    notetype: 'Coaching',
                    note: "Susan wasn't wearing safety goggles",
                },
                {
                    enteringLeaderID: 1,
                    coachingDate: 3-4-2020,
                    talentGroup: 'Reliability',
                    notetype: 'Coaching',
                    note: "Susan called in",
                },
            ],
            recognitionNotes: [
                {
                    enteringLeaderID: 2,
                    coachingDate: 3-4-2020,
                    talentGroup: 'Teamwork',
                    notetype: 'Recognition',
                    note: "TM helped another TM with spill",
                },
                {
                    enteringLeaderID: 1,
                    coachingDate: 3-4-2020,
                    talentGroup: 'Production',
                    notetype: 'Recognition',
                    note: "TM exceeded expectation by 10%",
                },
                {
                    enteringLeaderID: 1,
                    coachingDate: 3-4-2020,
                    talentGroup: 'Teamwork',
                    notetype: 'Recognition',
                    note: "TM was cleaning machine during downtime",
                },
                {
                    enteringLeaderID: 1,
                    coachingDate: 3-4-2020,
                    talentGroup: 'Safety',
                    notetype: 'Recognition',
                    note: "TM identified a safety risk.",
                },
            ]
        },
        {
            name:'Jake TM',
            tmNum: 2234,
            department: 'Printing',
            doh: 3-5-2018,
            coaching: 4,
            step: 1,
            recognition: 1,
            coachingnotes: [
                {
                    enteringLeaderID: 4,
                    coachingDate: 3-4-2020,
                    talentGroup: 'Safety',
                    notetype: 'Coaching',
                    note: "this guy isn't getting it",
                },
                {
                    enteringLeaderID: 4,
                    coachingDate: 8-4-2020,
                    talentGroup: 'Reliability',
                    notetype: 'Coaching',
                    note: "Jake was late",
                },
                {
                    enteringLeaderID: 4,
                    coachingDate: 3-14-2020,
                    talentGroup: 'Safety',
                    notetype: 'Coaching',
                    note: "Jake needs to put his phone away",
                },
                {
                    enteringLeaderID: 4,
                    coachingDate: 3-24-2020,
                    talentGroup: 'Reliability',
                    notetype: 'Coaching',
                    note: "Jake was late"
                }
            ],
            recognitionNotes: [
                {
                    enteringLeaderID: 3,
                    coachingDate: 3-4-2020,
                    talentGroup: 'Teamwork',
                    notetype: 'Recognition',
                    note: "TM helped another TM with spill",
                },
            ]
        }
    ]
}