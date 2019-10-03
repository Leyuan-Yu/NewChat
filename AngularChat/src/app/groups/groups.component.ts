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
  groupData = {id:'',name:'', admin:'',channels:''};
  upGroupData = {id:'',name:'',admin:[],channels:[]};
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
        // this.loadOneUser();
      }
    },
    err => console.log(err)
    )
  }

  addGroup(){
    this.upGroupData.id = this.groupData.id;
    this.upGroupData.name = this.groupData.name;
    this.upGroupData.admin[0] = this.groupData.admin;
    this.upGroupData.channels[0] = {name: this.groupData.channels, admin:null}
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

  toChannel(){
    this.router.navigate(['/Chat'])
  }

}
