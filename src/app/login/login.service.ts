import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import REST_API from '../../assets/REST_API.json'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginDetails = {}
  Matcardtitlename

  constructor(private httpClient:HttpClient,private _router:Router) { }
  getToken(){
    this.loginDetails["social_login"] =false
    let uri = "http://127.0.0.1:8001/login"
    console.log(this.loginDetails)
    return this.httpClient.put(uri,this.loginDetails)
  }
  loggedIn(){
    return !!localStorage.getItem("AuthToken") 
  }
  getTokenFromLocalStorage(){
    return localStorage.getItem("AuthToken")
  }
  
  logOut(){
    localStorage.removeItem("AuthToken")
    this._router.navigate(['/login'])
  }
}
