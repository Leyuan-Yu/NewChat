// initialize express
let express = require('express');
let app = express();

//setup http
let http = require('http');
let server = http.Server(app);

//import router module
var userRouter = require('./routes/userRouter');

//setup sockets
let socketIO = require('socket.io');
let io = socketIO(server);

//setup port location
const port = process.env.PORT || 3000

//connection event
io.on('connection',(socket)=>{
    console.log('user connected');

    //listen on message
    socket.on('new-message',(message)=>{
        io.emit('new-message',message);
    });
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