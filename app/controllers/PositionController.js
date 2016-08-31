'use strict';

let RoverService = autoload('./app/services/RoverService');

let controller = {
  current: (req, res, next) => {
    let position = RoverService.position();
    res.json(position);
  },

	update: (req, res, next) => {
		console.log(req.body);

		res.send('working')
	}
};

module.exports = controller;
