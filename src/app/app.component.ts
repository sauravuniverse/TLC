import { Component } from '@angular/core';
import {LoginService} from "./login/login.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TlcApp';
  constructor(public authService:LoginService,private router:Router){}


}
