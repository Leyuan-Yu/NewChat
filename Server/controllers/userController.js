// module contains user API controllers

var userController = {
    handleGetUserList: function(req,res){
        res.send("send user list, router, controller seperated");
    },
    handleAddUser: function(req,res){
        res.send("Add user, router, controller seperated");
    },
    handleGUpdateuser: function(req,res){
        res.send("Update User, router, controller seperated");
    },
    handleDelUser: function(req,res){
        res.send("Delete User, router, controller seperated");
    }
};

// export the module

module.exports = userController;

//dummy data
var users = [
    {id:1, name:'super', group:'super', password:'1234', email:'test@admin.com'},
    {id:2, name:'aaa', group:'normal', password:'1234', email:'test@admin.com'},
    {id:3, name:'groupadmin', group:'normal', password:'1234', email:'test@admin.com'}
];