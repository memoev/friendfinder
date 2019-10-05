// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
    {
        "name": "Jason Voorhees",
        "photo": "https://movies-b26f.kxcdn.com/wp-content/uploads/2015/02/Jason-770x470.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Freddy Krueger",
        "photo": "https://www.dreadcentral.com/wp-content/uploads/2019/05/Freddy-Krueger-Banner.jpg",
        "scores": [
            5,
            1,
            3,
            3,
            5,
            1,
            8,
            5,
            4,
            1
        ]
    },
    {
        "name": "Charles Lee 'Chucky' Ray",
        "photo": "https://upload.wikimedia.org/wikipedia/en/7/72/Chucky_%28Child%27s_Play%29.jpg",
        "scores": [
            3,
            1,
            4,
            3,
            5,
            1,
            2,
            2,
            4,
            5
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;