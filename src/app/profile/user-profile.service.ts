import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(public http:HttpClient) { }
  getUserData(){
    let uri =  "http://192.168.1.105:8001/user_details";
    return this.http.put(uri,{})
  }
}
