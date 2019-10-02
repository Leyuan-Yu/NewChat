//import and setup express
var express = require('express');
var userRouter = express.Router();

//import controllers
var userController = require('./../controllers/userController');

//external controllers used for router
userRouter.route('')
    .get(userController.handleGetUserList)
    .post(userController.handleAddUser)
    .put(userController.handleGUpdateuser)
    .delete(userController.handleDelUser);

// router for returning single user
userRouter.route('/:id')
    .get(userController.handleGetUser);
        
// export router module    
module.exports = userRouter;
