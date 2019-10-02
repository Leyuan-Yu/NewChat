//import and setup express
var express = require('express');
var loginRouter = express.Router();

//import controllers
var userController = require('./../controllers/loginController');

//external controllers used for router
userRouter.route('')
    //.get(userController.handleGetUserList)
    //.post(loginController.handleLogin)
    //.put(userController.handleGUpdateuser)
    //.delete(userController.handleDelUser);

// router for returning single user
userRouter.route('/:name')
    .get(userController.handleLogin);
        
// export router module    
module.exports = loginRouter;