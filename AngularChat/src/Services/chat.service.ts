//import io
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

//export service
export class ChatService{
    private url = 'http://localhost:3000';
    private socket;


    constructor(){
        this.socket = io(this.url);
    }

    //function to send message 
    public sendMessage(message){
        this.socket.emit('new-message',message);
    }

    //function to receive message
    public getMessage = () =>{
        return Observable.create((observer)=>{
            this.socket.on('new-message',(message)=>{
                observer.next(message);
            });
        });
    }
}
