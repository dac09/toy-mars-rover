'use strict';

const StatusRoute = require('./routes/StatusRoute');

const Position = require('./routes/Position');
const positionCheck = require('./middlewares/positionCheck');

const Routes = [
	{
  	path: '/',
  	handler: StatusRoute,
	},
	{
		path: '/position',
		middleware: positionCheck,
		handler: Position,
	}
];

module.exports = Routes;
