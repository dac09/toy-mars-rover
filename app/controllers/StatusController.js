'use strict';

let RoverService = autoload('./app/services/RoverService');

let controller = {
  info: function(req, res, next) {
    let info = RoverService.info();
    res.json(info);
  },
};

module.exports = controller;
