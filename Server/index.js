// initialize express
let express = require('express');
let app = express();

// import and use cors
var cors =require('cors');
app.use(cors());

//import mongoose
var mongoose = require('mongoose');
//connect to mongodb locally
var db = mongoose.connect("mongodb://localhost:27017/MyChatDB");
//check if the connection suceed
var connection = mongoose.connection;
connection.on('connected',function(){
    console.log('Connected to MongoDB!');
});
//handles connection errors
connection.on('error',function(){
    console.log('db connection error',error);
});

//setup http
let http = require('http');
let server = http.Server(app);

//import router module
var userRouter = require('./routes/userRouter');
var loginRouter = require('./routes/loginRouter');
var groupRouter = require('./routes/groupRouter');

//import body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//setup sockets
let socketIO = require('socket.io');
let io = socketIO(server);

//setup port location
const port = process.env.PORT || 3000

//connection event
//function to create namespace
function createNamespace(group){
    var nsp = io.of('/'+group);
    nsp.on('connection',(socket)=>{
        console.log('user connected to ' + nsp);
        socket.on('new-message',(message)=>{
            nsp.emit('new-message',message);
    });
    });
}

//import groups
var chatGroups = [1];
var Group = require('./dataModels/groupModels');

Group.find(function(err,groups){
    if(err){
        console.log(err);
    }else{
        for (var i=0; i<groups.length;i++){  
            createNamespace(groups[i].name);    
        }
    }
});





//start listening
server.listen(port,()=>{
    console.log(`started on port: ${port}`);
});

//The following section serves the express REST API
//listening on port 4000
app.listen(4000,function(){
    console.log('REST API on 4000');
})

//setup router
//req for request, res for response
app.get('/',function(req,res){
    //frequently used requests
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    console.log(req.params);
    console.log(req.query);
    //send response
    res.send('message from the server');
});

//use the imported Router
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/group', groupRouter);