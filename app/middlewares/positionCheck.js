let RoverService = autoload('./app/services/RoverService');

const positionCheck = (req, res, next) => {
	let position = RoverService.position();

	if (position && 'x' in position && 'y' in position) {
		res.locals.position = position;
		next();
	} else {
		const err = new Error('Position not found');
		next(err);
		return;
	}
}

module.exports = positionCheck;
