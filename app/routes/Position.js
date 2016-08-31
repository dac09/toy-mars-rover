'use strict';

/*
 * Todos Route
 * path: /todos
 */

let express = require('express');
let positionController = autoload('./app/controllers/positionController');

let router = express.Router();

router.get('/', positionController.current);
router.put('/', positionController.update);

// router.post('/', Controller.create); // POST /todos
// router.put('/:id', Controller.update); // PUT /todos/:id
// router.delete('/:id', Controller.destroy); // DELETE /todos/:id

module.exports = router;
