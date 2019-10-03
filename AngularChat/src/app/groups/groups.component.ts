import { Component, OnInit } from '@angular/core';
import { RestApiService} from '../../Services/api-services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  usergroup: string;
  currentUser: string;
  Groups: any = {};
  groupData = {id:'',name:'', admin:'',channels:'', users:''};
  upGroupData = {id:'',name:'',admin:[],channels:[],users:[]};
  constructor(
    public restApi:RestApiService,
    public router : Router
    ) 
    { 
    this.usergroup = localStorage.getItem('group')
    this.currentUser = localStorage.getItem('CurrentUser');
  }

  ngOnInit() {
    this.loadGroups();
  }

  loadGroups(){
    return this.restApi.getGroups().subscribe(res =>{
      if (this.usergroup == 'super'){
        console.log(res.data);
        this.Groups = res.data;
      } else{
        this.loadUserGroup();
      }
    },
    err => console.log(err)
    )
  }

  loadUserGroup(){
    console.log(this.currentUser);
    return this.restApi.getUserGroup(this.currentUser).subscribe(res =>{
      this.Groups = res.data
      console.log(res.data)
    })    
  }

  addGroup(){
    this.upGroupData.id = this.groupData.id;
    this.upGroupData.name = this.groupData.name;
    this.upGroupData.admin[0] = this.groupData.admin;
    this.upGroupData.channels[0] = {name: this.groupData.channels, admin:null}
    this.upGroupData.users [0]= this.groupData.users;
    console.log(this.upGroupData);
    return this.restApi.addGroup(this.upGroupData).subscribe(res =>{
      alert(res.info);
      this.loadGroups();
    })
  }

  upGroup(){
    this.upGroupData.id = this.groupData.id;
    this.upGroupData.name = this.groupData.name;
    this.upGroupData.admin[0] = this.groupData.admin;
    this.upGroupData.channels[0] = {name: this.groupData.channels, admin:null}
    this.upGroupData.users [0]= this.groupData.users;
    console.log(this.upGroupData);
    return this.restApi.upGroup(this.upGroupData).subscribe(res =>{
      alert(res.info);
      this.loadGroups();
    })
  }

  delGroup(){
    return this.restApi.delGroup(this.groupData.name).subscribe(res=>{
      alert(res.info);
      this.loadGroups();
    })
  }

  toChannel(channelName,groupName){
    localStorage.setItem('currentChannel',channelName);
    localStorage.setItem('currentGroup',groupName);
    this.router.navigate(['/Chat'])
  }
  
  
  userMenu(){
    this.router.navigate(['/Menu'])
  }

}
