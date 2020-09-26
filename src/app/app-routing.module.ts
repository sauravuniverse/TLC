import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReportabuseComponent } from './reportabuse/reportabuse.component';
import { AuthGuard } from './auth.guard'
import { JobpostComponent } from './jobpost/jobpost.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "reportabuse", component: ReportabuseComponent, canActivate: [AuthGuard]},
  { path: "jobpost", component: JobpostComponent, canActivate: [AuthGuard]},
  { path: "profile", component: ProfileComponent},
  
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
