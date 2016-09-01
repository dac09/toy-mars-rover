'use strict';

const low = require('lowdb');
const db = low();


// Instantiate LowDB
// Using in memory storage

// Hard coding this for the sake of the test
db.defaults({
	otherRovers: [
		{
			x: 2,
			y: 2,
		}
	],
	gridSize: {
		x: 10,
		y: 7,
	},
	position: {
		x: 1,
		y: 3,
		direction: 0,
	},
})
.value();

module.exports = db;
