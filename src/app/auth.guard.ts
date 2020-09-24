import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {LoginService} from './login/login.service'
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:LoginService,private _router:Router,private toaster: ToastrService){}
  details
  canActivate():boolean{
    if (this._authService.loggedIn()){      
      return true
    }
    else{
      this._router.navigate(["/login"])
      return false
    }
  }  
  
}