//import and setup express
var express = require('express');
var groupRouter = express.Router();

//import controllers
var groupController = require('./../controllers/groupController');

//external controllers used for router
groupRouter.route('')
    .get(groupController.handleGetGroupList)
    .post(groupController.handleAddGroup)
    .put(groupController.handleGUpdateGroup)
    //.delete(userController.handleDelUser);

// router for returning single user
groupRouter.route('/:name')
    .get(groupController.handleGetGroup);
        
// export router module    
module.exports = groupRouter;