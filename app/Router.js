'use strict';

const InfoRoute = require('./routes/InfoRoute');

const Routes = [{
  path: '/info',
  handler: InfoRoute,
}];

module.exports = Routes;
