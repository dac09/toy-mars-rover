'use strict';

let Todo = require('../models/Todo');

let service = {

  listAll: function() {

    return Todo.findAll();
  },

  find: function(params) {

    return Todo.findOne({
      where: params
    });
  },

  create: function(params) {

    return Todo.insert(params);
  },

  update: function(params, sets) {

    return Todo.update(sets,{
      where: params
    });
  },

  destroy: function(params){

    return Todo.remove({
      where: params
    });
  }
};

module.exports = service;
