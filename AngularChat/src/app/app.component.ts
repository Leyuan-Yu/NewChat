import { Component } from '@angular/core';
//import chat service
import { ChatService } from '../Services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //format the message
  message : string;
  //format the received messages
  messages : string[] = [];

  constructor(private chatService: ChatService){}

  //use to send message
  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = ''
  } 

  ngOnInit(){
    this.chatService
      .getMessage()
      .subscribe((message:string)=>{
        this.messages.push(message);
        console.log(this.messages);
      });
  }

}
