const express = require('express');

const userController = require('./userController');
const projectController = require("./projectContoller");


// const {
//     createAccountMiddleware
// } = require("../utils/validationMiddleware");


const router = express.Router();
///////////////////////////////////////////
//Project
router.get('/projects', projectController.getALLProject);
router.post('/project/:id', projectController.createProject);

//////////////////////////////////////////
//User

//receive all users
router.get('/users', userController.getALLUsers);

//create user
router.post('/user', userController.createUser);

//find user by id
router.get('/user/:id', userController.findById);

//update user by id
router.put('/user/:id', userController.updateUser);

//delete user by id
router.delete('/user/:id',  userController.deleteUserById);


module.exports = router;