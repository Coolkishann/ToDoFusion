// //royes/tasks.js

// const express = require('express');
// const router = express.Router();
// const checkAuth = require('../middleware/authMiddleware');
// const taskController = require('../controllers/taskController');

// router.post('/', checkAuth, taskController.createTask);
// router.get('/all', checkAuth, taskController.getAllTasks);
// router.get('/myTasks', checkAuth, taskController.getCurrentUserTasks);
// router.get('/:taskId', checkAuth, taskController.getSingleTask);
// router.put('/:taskId', checkAuth, taskController.updateTask);
// router.delete('/:taskId', checkAuth, taskController.deleteTask);
// router.delete('/all/deleteAll', checkAuth, taskController.deleteAllTasks);

// module.exports = router;


const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authMiddleware');
const taskController = require('../controllers/taskController');

// POST a new task
router.post('/', checkAuth, taskController.createTask);

// GET all tasks
router.get('/all', checkAuth, taskController.getAllTasks);

// GET tasks of the current user
router.get('/myTasks', checkAuth, taskController.getCurrentUserTasks);

// GET a single task by taskId
router.get('/:taskId', checkAuth, taskController.getSingleTask);

// PUT update a task by taskId
router.put('/:taskId', checkAuth, taskController.updateTask);

// DELETE a task by taskId
router.delete('/:taskId', checkAuth, taskController.deleteTask);

// DELETE all tasks of the current user
router.delete('/all/deleteAll', checkAuth, taskController.deleteAllTasks);

module.exports = router;
