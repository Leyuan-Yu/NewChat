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

   /* //ERROR handling
    handleError(error){
        let errorMessage ='';
        if(error.error instanceof ErrorEvent){
            errorMessage = 
        }*/

}



