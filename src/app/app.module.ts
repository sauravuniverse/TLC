import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {AuthGuard} from './auth.guard'
import {TokenInteceptorService} from './token-intecptor.service';
import { MaterialModule } from './material';
import { ReportabuseComponent } from './reportabuse/reportabuse.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from "@angular/material/table";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { JobpostComponent } from './jobpost/jobpost.component';
import { ProfileComponent } from './profile/profile.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    ReportabuseComponent,
    JobpostComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
    MatExpansionModule
    
  ],
  providers: [AuthGuard,
    {provide:HTTP_INTERCEPTORS,useClass:TokenInteceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
