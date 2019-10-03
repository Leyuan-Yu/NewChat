// module contains login API controllers

//import Mongoose schema
var User = require('./../dataModels/userModel');

// controller

var loginController ={

    //function to handle login
    handleLogin : function(req,res){
        if (req.method === 'POST'){
            if(req.body && req.body.name && req.body.password){
                User.findOne({name:req.body.name}, function(err,user){
                    if (err || !user){
                        res.send(output(false, null, 'User Does Not Exist'));
                    } else{
                        if (user.password === req.body.password){
                            res.send(output(true, user, 'log in succeed'));
                        } else{
                            res.send(output(false, null, 'Incorrect Password'));
                        }
                    }
                });
            }else{
                res.send(output(false, null, 'Require More Info.'));
            }
        }else{
            res.send(output(false, null, 'incorrect method'));
        }
    }
}



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