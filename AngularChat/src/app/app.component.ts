import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import { RestApiService } from '../Services/api-services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginData = {name:'', password:''};
  routerUrl : string;
  loggin : string;

  constructor(
    public restApi: RestApiService,
    public router : Router,
  ){
    this.loggin = localStorage.getItem('loggedin');
  }

  ngOnInit(){

  }

  login(){
    console.log(this.router.url);
    this.restApi.logIn(this.loginData).subscribe(
      res => {
        localStorage.setItem('loggedIn', res.status)
        alert(res.info)
        if(res.status){
        localStorage.setItem('CurrentUser',res.data.name)
        localStorage.setItem('group', res.data.group)}
        this.router.navigate(['/Groups'])
      },
      err => console.log(err)
    )
  }


}
