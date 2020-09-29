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
import { IntroComponent } from './profile/profileBuilder/intro/intro.component';
import { WorkEduComponent } from './profile/profileBuilder/work-edu/work-edu.component';
import { SkillsComponent } from './profile/profileBuilder/skills/skills.component';
import { CertAwardComponent } from './profile/profileBuilder/cert-award/cert-award.component';
import { AddnInfoComponent } from './profile/profileBuilder/addn-info/addn-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    ReportabuseComponent,
    JobpostComponent,
    ProfileComponent,
    IntroComponent,
    WorkEduComponent,
    SkillsComponent,
    CertAwardComponent,
    AddnInfoComponent
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
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [AuthGuard,
    {provide:HTTP_INTERCEPTORS,useClass:TokenInteceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
