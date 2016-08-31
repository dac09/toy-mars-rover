'use strict';

// We don't need a model layer because
// DB is far too simple, especially with no schema

const db = require('../../config/db');

let service = {
  info: () => {
		return db.value();
  }
};

module.exports = service;
