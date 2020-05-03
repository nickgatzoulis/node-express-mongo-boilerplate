const express = require('express');
const tasksController = require('../controllers/tasks');

// Router initialisation
const router = express.Router();

// CRUD
// Create (task) POST
router.post('/createTask', tasksController.createTask);

// Read (task) GET
router.get('/getTask/:id', tasksController.getTask);

// Update (task) PATCH
router.patch('/updateTask/:id', tasksController.updateTask);

// Delete (task) DELETE
router.delete('/deleteTask/:id', tasksController.deleteTask);

module.exports = router;