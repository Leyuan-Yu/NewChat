import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChannelsComponent} from './channels/channels.component';
import {ChatComponent} from './chat/chat.component';
import {GroupsComponent} from './groups/groups.component';
import {UserMenuComponent} from './user-menu/user-menu.component';

const routes: Routes = [
  {path:'Channels', component: ChannelsComponent},
  {path:'Groups', component: GroupsComponent},
  {path:'Chat', component: ChatComponent},
  {path:'Menu', component: UserMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
