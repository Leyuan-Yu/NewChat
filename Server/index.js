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
});

server.listen(port,()=>{
    console.log(`started on port: ${port}`);
});