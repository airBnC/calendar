var data = [
	{
		year: 18,
		cost: 357,
		month: 'January',
		beginning: 1,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 300,
		month: 'Febuary',
		beginning: 4,
		day: 28,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 400,
		month: 'March',
		beginning: 4,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 420,
		month: 'April',
		beginning: 0,
		day: 30,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 50,
		month: 'May',
		beginning: 2,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 911,
		month: 'June',
		beginning: 5,
		day: 30,
		daysOpen: [1, , 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 911,
		month: 'July',
		beginning: 0,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 45,
		month: 'August',
		beginning: 3,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 197,
		month: 'Sepember',
		beginning: 6,
		day: 30,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 388,
		month: 'October',
		beginning: 1,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 37,
		month: 'November',
		beginning: 4,
		day: 30,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	{
		year: 18,
		cost: 357,
		month: 'December',
		beginning: 6,
		day: 31,
		daysOpen: [1, 2, 3, 6, 8, 12, 15, 22, 23, 24, 25, 28, 31]
	},
	
]
module.exports = data;

//try makeing your months linked lists


// calendar:[
// 	[null, null, null, null, null, [1], [2]],
// 	[[3], [4], [5], [6], [7], [9], [9]],
// 	[[10], [11, 82], [12, 82], [13, 82], [14, 82], [15], [16]],
// 	[[17], [18], [19], [20], [21], [22], [23]],
// 	[[24], [25, 82], [26, 82], [27, 82], [28], [29, 500], [30]],
// 	[null, null, null, null, null,  null, null
// ]







//TO MAKE DATA WAY SMALLER REACTOR
//just use the starting inex and the ending index and run through a
// loop like map to fill in the dates