import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {LoginService} from './login/login.service'
@Injectable({
  providedIn: 'root'
})
export class TokenInteceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req,next){
    let authService = this.injector.get(LoginService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Autharization:`Brearer ${authService.getTokenFromLocalStorage()}`
      } 
    })
    return next.handle(tokenizedReq)
  }
}