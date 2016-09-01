'use strict';

let RoverService = autoload('./app/services/RoverService');
let err = require('../constants/err');

let controller = {
  current: (req, res, next) => {
    res.json(res.locals.position);
  },

	update: (req, res, next) => {
		let position = res.locals.position;
		const moveDirection = req.body.direction;
		const gridSize = RoverService.gridSize();

		if (moveDirection in req.app.locals.config.supportedDirections) {
			let positionToChange = 'y';
			let plus = true;

			// Only matters if its up or down
			switch(position.direction) {
				case 180:
				case -180:
					plus = false;
					positionToChange = 'y'
				break;

				case 0:
					positionToChange = 'y'
					plus = true;
				break;

				case 90:
					positionToChange = 'x'
					plus = true;
				break;

				case -90:
					positionToChange = 'x'
					plus = false;
				break;

				default:
			}

			// Invert the direction it'll go
			if (moveDirection === 'DOWN') {
				plus = !plus;
			}

			if (plus && position[positionToChange] < gridSize[positionToChange]){
				position[positionToChange]++;
			} else if (!plus && position[positionToChange] > 0){
				position[positionToChange]--;
			}

			res.json(position);

		} else {
			err.message = 'Unsupported movement';
			err.status = 422;
			throw err;
		}


	},

};

module.exports = controller;
