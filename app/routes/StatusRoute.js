'use strict';

/*
 * Todos Route
 * path: /todos
 */

let express = require('express');
let Controller = autoload('./app/controllers/StatusController');

let router = express.Router();

router.get('/', Controller.info);

// router.post('/', Controller.create); // POST /todos
// router.put('/:id', Controller.update); // PUT /todos/:id
// router.delete('/:id', Controller.destroy); // DELETE /todos/:id

module.exports = router;
