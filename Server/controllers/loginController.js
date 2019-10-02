// module contains login API controllers

//import Mongoose schema
var User = require('./../dataModels/userModel');

// controller

var loginController ={
    //function to handle login
    handleLogin : function(req,res){
        if (req.method === 'POST'){
            if(req.body && req.body.name && req.body.password){
                
            }else{
                res.send(output(false, null, 'Require More Info.'))
            }
        }
    }
}

/*
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
    }*/

//export module
module.exports = loginController;

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