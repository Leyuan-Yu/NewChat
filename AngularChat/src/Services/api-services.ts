import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../app/shared/user';
import { Observable, throwError} from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class RestApiService{
    //API URL
    apiURL = 'http://localhost:4000';

    constructor(private http:HttpClient){};

    //METHODS to INTERACT WITH REST API

    //htttp Options
    httpOptions ={
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        })
    }

    //POST() => to log in
    logIn(login){
        return this.http.post<any>(this.apiURL+'/login',login)
    }

    //GET() => to get a list of users
    getUsers(){
        return this.http.get<any>(this.apiURL+'/user')
    }

    //GET('/:name') => to get a single user
    getOneUser(name){
        return this.http.get<any>(this.apiURL+'/user/'+name)
    }

    //POST() => to add a new User
    AddUser(data){
        return this.http.post<any>(this.apiURL+'/user',data)
    }

    //DELETE() => to delete a user by name
    DelUser(data){
        return this.http.delete<any>(this.apiURL+'/user',data)
    }

    //PUT() => to update a user by name and id
    UpUser(data){
        return this.http.put<any>(this.apiURL+'/user',data)
    }
   /* //ERROR handling
    handleError(error){
        let errorMessage ='';
        if(error.error instanceof ErrorEvent){
            errorMessage = 
        }*/

}



