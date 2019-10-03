import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../Services/api-services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  usergroup: string;
  currentUser: string;
  Users: any = {};
  userData = {id:'',name:'', password:'',email:'',imgpath:'',group:''};
  
  
  constructor(public restApi:RestApiService, private router:Router) {
    this.usergroup = localStorage.getItem('group')
    this.currentUser = localStorage.getItem('CurrentUser');
   }

  ngOnInit() {
    // alert(this.usergroup);
    this.loadUsers()
  }
  //medthod to load user
  loadUsers(){
    return this.restApi.getUsers().subscribe(res =>{
      if (this.usergroup == 'super'){
        console.log(res.data);
        this.Users = res.data;
      } else{
         this.loadOneUser();
      }
    },
    err => console.log(err)
    )
  }

  loadOneUser(){
    return this.restApi.getOneUser(this.currentUser).subscribe(res =>{
      console.log(res.data);
      this.Users = [res.data];
    })
  }

  addUser(){
    console.log(this.userData);
    return this.restApi.AddUser(this.userData).subscribe(res =>{
      alert(res.info);
      this.loadUsers();
    })
  }

  delUser(){
    return this.restApi.DelUser(this.userData.name).subscribe(res=>{
      console.log(this.userData.name);
      alert(res.info);
      console.log(res);
      this.loadUsers();
    })
  }

  upUser(){
    console.log(this.userData);
    return this.restApi.UpUser(this.userData).subscribe(res=>{
      alert(res.info);
      this.loadUsers();
    })
  }

  back(){
    this.router.navigate(['/Groups'])
  }
}
