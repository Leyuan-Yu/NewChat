//import io
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

//export service
export class ChatService{
    private url = 'http://localhost:3000/'+localStorage.getItem('currentGroup');
    private channel = localStorage.getItem('currentChannel');
    private socket 
    private joinedMessage = localStorage.getItem('CurrentUser')+' has joined the channel.';
    private leaveMessage = localStorage.getItem('CurrentUser')+' has left the channel.';
    private user = localStorage.getItem('CurrentUser');

    constructor(){
        this.socket = io(this.url);
    }

    //function to send message 
    public sendMessage(message){
        this.socket.emit('new-message',this.user+' : '+message);
    }

    //function to receive message
    public getMessage = () =>{
        return Observable.create((observer)=>{
            this.socket.on('new-message',(message)=>{
                observer.next(message);
            });
        });
    }

    //joined the channel
    public joined(){ 
        this.socket.emit('new-message', this.joinedMessage);
    }

    public left(){ 
        this.socket.emit('new-message', this.leaveMessage);
    }

}
