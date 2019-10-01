import { Component } from '@angular/core';
//import chat service
import { ChatService } from '../Services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Launched!';

  constructor(chatService: ChatService){}
  
}
