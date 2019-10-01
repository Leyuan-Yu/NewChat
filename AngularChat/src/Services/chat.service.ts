//import io
import * as io from 'socket.io-client';

//export service
export class ChatService{
    private url = 'http://localhost:3000';
    private socket;


    constructor(){
        this.socket = io(this.url);
    }
}
