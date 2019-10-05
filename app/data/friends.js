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
    }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;