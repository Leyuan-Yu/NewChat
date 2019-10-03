// module contains group API controllers

//import Mongoose schema
var Group = require('./../dataModels/groupModels');

var groupController = {
    //return all groups from DB
    handleGetGroupList: function(req,res){
        Group.find(function(err,groups){
            if(err){
                res.send(output(false, null, 'request failed'));
            }else{
                res.send(output(true, groups, 'request suceed'));
            }
        });
    },
    
    //return single group by name from DB
    handleGetGroup: function(req,res){
        // console.log(req.params);
        if(req.params && req.params.name){
            Group.findOne(req.params, function(err,group){
                console.log(req.params);
                if (err || !group){
                    res.send(output(false,null,'group not found'));
                } else{
                    res.send(output(true, group, 'query succeed!'));
                }
            });
        }else{
            res.send(output(false, null, 'request failed'));
        }
    },

    // function to add group to DB
    handleAddGroup: function(req,res){
        var group = new Group(req.body);
        group.save(function(err){
            //handle error
            if(err){
                res.send(output(false, null, 'unable to add group'));
            }else{
                //check if group is added
                Group.find(function(err,groups){
                    if(err){
                        res.send(output(false, group, 'group already exist'));
                    }else{
                        res.send(output(true, groups,'group added'));
                    }
                })
            }
        })
    },

    
    //function to update group info in the DB
    handleGUpdateGroup: function(req,res){
        console.log(req.body);
        if (req.method === 'PUT'){
            if(req.body && req.body.name &&req.body.id){
                Group.findOne({name:req.body.name,id:req.body.id}, function(err,group){
                    if (err || !group){
                        res.send(output(false,null, 'cannot find group'));
                    }else{
                        console.log(req.body.admin);
                        //define params
                        group.id = req.body.id;
                        group.name = req.body.name;
                        group.admin = req.body.admin;
                        group.channels = req.body.channels;
                        //update
                        group.save(function(err){
                            if(err){
                                res.send(output(false, null, 'fail to update group'));
                            }else{
                                res.send(output(true, group, 'group update succeeed'));
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

    /*
    // function to delete user from DB
    handleDelUser: function(req,res){
        if (req.method === 'DELETE'){
            console.log(req.body);
            console.log(req.body.name);
            console.log(req.body.id);
            if(req.body && req.body.name && req.body.id){
                User.findOne({name:req.body.name,id:req.body.id}, function(err,user){
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
    } */
};

// export the module

module.exports = groupController;

{
    status: true/false
    data:[]
    info:''
}

//output return
var output = function(status, data, info){
    return JSON.stringify({status:status, data:data, info:info})
}