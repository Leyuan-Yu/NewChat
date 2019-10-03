//import and setup express
var express = require('express');
var loginRouter = express.Router();

//import controllers
var loginController = require('./../controllers/loginController');

//external controllers used for router
//Router.route('')
    //.get(userController.handleGetUserList)
    //.post(loginController.handleLogin)
    //.put(userController.handleGUpdateuser)
    //.delete(userController.handleDelUser);

// router for returning single user
loginRouter.route('')
    .post(loginController.handleLogin);
        
// export router module    
module.exports = loginRouter;