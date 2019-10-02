// module contains user API controllers

var userController = {
    //return all users
    handleGetUserList: function(req,res){
        res.send(output(true, users, 'Query Success'));
    },

    //return single user by ID
    handleGetUser: function(req,res){
        var result;
        console.log(req.params);
        if(req.params && req.params.id){
            for(var i=0; i<users.length; i++){
                if(users[i].id == parseInt(req.params.id)){
                    result = users[i];
                }
            }
        }
        if (result){
            res.send(output(true, result, 'Query Success'));
        }else{
            res.send(output(false, null, 'User not found'));
        }
    },

    // function to add user
    handleAddUser: function(req,res){
        console.log(req.body);
        if (req.method === 'POST'){
            if(req.body.name && req.body.group && req.body.password && req.body.email){
                users.push(req.body);
                res.send(output(true, users, 'User Added!'));
            }else{
                res.send(output(false,null,'Require More Info'));
            }
        }else{
                res.send(output(false,null,'request error'));
        }
    },

    //function to change user info
    handleGUpdateuser: function(req,res){
        console.log(req.body);
        if (req.method === 'PUT'){
            var index;
            if (req.body.id && req.body.name && req.body.group && req.body.password && req.body.email){
                for (var i=0; i<users.length; i++){
                    // console.log('checking id'+i);
                    if(users[i].id == parseInt(req.body.id)){
                        index = i;
                        users[i].name = req.body.name;
                        users[i].group = req.body.group;
                        users[i].password = req.body.password;
                        users[i].email = req.body.email;
                    }
                }
                if (index){
                    res.send(output(true,users[index],'Change Complete'));
                }else{
                    res.send(output(false,null, 'user does not exist'));
                }
            }else{
                res.send(output(false,null, 'require more info'));
            }
        }else{
            res.send(output(false,null, 'incorrect requiest'));
        }
    },
    // function to delete user
    handleDelUser: function(req,res){
        if (req.method === 'DELETE'){
            if (req.body.id){
                //count the number of users first
                var count = users.length;
                for (var i=0; i<users.length; i++){
                    if(users[i].id == parseInt(req.body.id)){
                        console.log('user '+i+' deleted');
                        users.splice(i,1);
                    }
                }
                    //check if the delete is successful
                if (count == users.length){
                        res.send(output(true,null,'deletion fail'));
                }else{
                    res.send(output(true,users,'deletion success'));
                }
            }else{
                res.send(output(false,null,'request failed need id'));
            }
        }
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