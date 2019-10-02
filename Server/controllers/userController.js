// module contains user API controllers

//import Mongoose schema
var User = require('./../dataModels/userModel');

var userController = {
    //return all users from DB
    handleGetUserList: function(req,res){
        User.find(function(err,users){
            if(err){
                res.send(output(false, null, 'request failed'));
            }else{
                res.send(output(true, users, 'request suceed'));
            }
        });
    },

    //return single user by ID from DB
    handleGetUser: function(req,res){
        if(req.params && req.params.id){
            User.findById(req.params.id, function(err,user){
                if (err || !user){
                    res.send(output(false,null,'user not found'));
                } else{
                    res.send(output(true, user, 'query succeed!'));
                }
            });
        }else{
            res.send(output(false, null, 'request failed'));
        }
    },

    // function to add user to DB
    handleAddUser: function(req,res){
        var user = new User(req.body);
        user.save(function(err){
            //handle error
            if(err){
                res.send(output(false, null, 'unable to add user'));
            }else{
                //check if user is added
                User.find(function(err,users){
                    if(err){
                        res.send(output(false, user, 'user already exist'));
                    }else{
                        res.send(output(true,users,'user added'));
                    }
                })
            }
        })
    },

    //function to change user info in the DB
    handleGUpdateuser: function(req,res){
        // console.log(req.body);
        if (req.method === 'PUT'){
            if(req.body && req.body._id){
                User.findById(req.body._id, function(err,user){
                    if (err || !user){
                        res.send(output(false,null, 'cannot find user'));
                    }else{
                        //define params
                        user.id = req.body.id;
                        user.name = req.body.name;
                        user.password = req.body.password;
                        user.group = req.body.group;
                        user.email = req.body.email;
                        user.imgpath = req.body.imgpath;
                        //update
                        user.save(function(err){
                            if(err){
                                res.send(output(false, null, 'fail to update user'));
                            }else{
                                res.send(output(true, user, 'user update succeeed'));
                            }
                        });
                    }
                });
            }else{
                res.send(output(false,null,'require more info'));
            }
        }else{
            res.send(output(false, null, 'request failed'));
        }
    },
    // function to delete user from DB
    handleDelUser: function(req,res){
        if (req.method === 'DELETE'){
            if(req.body && req.body._id){
                User.findById(req.body._id, function(err,user){
                    if (err || !user){
                        res.send(output(false,null, 'cannot find user'));
                    }else{
                        user.remove(function(err){
                            if(err){
                                res.send(output(false,null,'user deletion failed'));
                            }else{
                                User.find(function(err,users){
                                    if(err){
                                        res.send(output(false, null, 'user deleted!'));
                                    }else{
                                        res.send(output(true, users, 'user deleted'));
                                    }
                                });
                            }
                        });
                    }
                });
            }else{
                res.send(output(false, null, 'need more info'));
            }
        }
    }
};

// export the module

module.exports = userController;

/* //dummy data
var users = [
    {id:1, name:'super', group:'super', password:'1234', email:'test@admin.com', imgpath:null},
    {id:2, name:'aaa', group:'normal', password:'1234', email:'test@admin.com',imgpath:null},
    {id:3, name:'groupadmin', group:'normal', password:'1234', email:'test@admin.com',imgpath:null}
]; */

//format the return data
{
    status: true/false
    data:[]
    info:''
}

//output return
var output = function(status, data, info){
    return JSON.stringify({status:status, data:data, info:info})
}