import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers,RequestOptions } from '@angular/http';

import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/Rx';
import { API } from '../config/api';
import { tokenConfig } from '../config/token';

@Injectable()
export class AuthService {
  constructor(private http: Http, private route: Router) {  }

   private value:Array<string>;
   private baseHeader = new Headers({
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   });

   storeToken(token)
   {
     localStorage.setItem( tokenConfig._prefix , token);
   }


   _login(username, password) {
     return this.http.post( API.baseUrl + API.urlLogin,
     JSON.stringify({"username": username, "password": password}),
     { headers: this.baseHeader }
   ).map( res => res.json())
   .subscribe( data => this.storeToken(data));
   }

  getUsers() {
    this.baseHeader.set( tokenConfig.headerName , tokenConfig._prefix + localStorage.getItem( tokenConfig.localStorageName ) );
    return this.http.get( API.baseUrl + API.getUsers, {headers: this.baseHeader} )
    .map( res => res.json());
  }


  _authorized() {

  }

  _logged() {
    return tokenNotExpired( tokenConfig.localStorageName );
  }


}
