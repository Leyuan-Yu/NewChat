// initialize express
let express = require('express');
let app = express();

//setup http
let http = require('http');
let server = http.Server(app);

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



server.listen(port,()=>{
    console.log(`started on port: ${port}`);
});