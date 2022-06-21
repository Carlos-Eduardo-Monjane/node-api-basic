const express = require('express')

const router = express.Router()

const userController =   require('../controllers/userController');

// Retrieve all users
router.get('/', userController.findAll);

// Create a new user
router.post('/', userController.create);

// Delete a user with id
router.delete('/:id', userController.delete);


module.exports = router