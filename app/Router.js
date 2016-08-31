'use strict';

const StatusRoute = require('./routes/StatusRoute');
const Position = require('./routes/Position');

const Routes = [
	{
  	path: '/',
  	handler: StatusRoute,
	},
	{
		path: '/position',
		handler: Position,
	}
];

module.exports = Routes;
