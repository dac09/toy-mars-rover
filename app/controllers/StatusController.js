'use strict';

let RoverService = autoload('./app/services/RoverService');

let controller = {
  info: (req, res, next) => {
    let info = RoverService.info();
    info.status = 'Operational';
    res.json(info);
  },
};

module.exports = controller;
