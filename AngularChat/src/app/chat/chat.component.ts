import { Component, OnInit } from '@angular/core';
//import chat service
import { ChatService } from '../../Services/chat.service';
//import router
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    //format the message
    message : string;
    //format the received messages
    messages : string[] = [];
  
    channelName : string;
    groupName : string;

    constructor(private chatService: ChatService, private router:Router){}
  
    //use to send message
    sendMessage(){
      this.chatService.sendMessage(this.message);
      this.message = ''
    } 

  ngOnInit() {
    this.channelName = localStorage.getItem('currentChannel');
    this.groupName = localStorage.getItem('currentGroup');
    this.chatService
    .getMessage()
    .subscribe((message:string)=>{
      this.messages.push(message);
      console.log(message);
    });
    this.chatService.joined();
  }

  back(){
    localStorage.removeItem('currentChannel');
    localStorage.removeItem('currentGroup');
    this.chatService.left();
    this.router.navigate(['/Groups']);
  }
}
