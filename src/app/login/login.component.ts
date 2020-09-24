import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {LoginService} from './login.service'
import APP_DEFAULT from '../../assets/AppDefault.json'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  APPNAME= "";
  
  constructor(public httService:LoginService,private snackbar:MatSnackBar,private router:Router,private toaster:ToastrService) { 
    this.APPNAME = APP_DEFAULT["AppName"]
    
  }

  loginFormGroup : FormGroup

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Enter a email adress to continue' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  ngOnInit(){
   
  
    this.loginFormGroup = new FormGroup({
      email:this.email,
      password:new FormControl('',[Validators.required])
    })
  }

selectedOption
selectedList

dropdownist=[
  {value: 'user', viewValue: 'user'},
  {value: 'admin', viewValue: 'admin'},
]

onSelect(event:Event){
 this.selectedList =this.dropdownist.find(list => list.value == this.selectedOption)
}

setEmail(event:Event){
  this.httService.loginDetails["email"] =(event.currentTarget as HTMLInputElement).value 
}

setPassword(event:Event){
  this.httService.loginDetails["personalkey"] = (event.currentTarget as HTMLInputElement).value
}

validateLogin(){
  this.httService.getToken().subscribe(
    res=>{
      localStorage.setItem("AuthToken",res["AUTH-TOKEN"])
     this.router.navigate(['/reportabuse'])
      this.snackbar.open("Validated",this.APPNAME,{duration:5000}) 
      console.log(res) 
      
    
    },
    err=>{
      this.snackbar.open(err.error["MSG"],this.APPNAME)
    })
}
}
