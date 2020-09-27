import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog} from '@angular/material/dialog';
import { IntroComponent } from './profileBuilder/intro/intro.component';
import { WorkEduComponent } from './profileBuilder/work-edu/work-edu.component';
import { SkillsComponent } from './profileBuilder/skills/skills.component';
import { CertAwardComponent } from './profileBuilder/cert-award/cert-award.component';
import { AddnInfoComponent } from './profileBuilder/addn-info/addn-info.component';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isenabled : boolean  = false;
  toggle : boolean  = false;
  proPicUpdate : boolean = false;
  panelOpenState = false;
  work=[
    {text:"Principal", dublicate:false},
    {text:"Vice Principal", dublicate:false},
    {text:"Headmistress", dublicate:false},
    {text:"Headmaster", dublicate:false},
    {text:"Primary Teacher", dublicate:false},
    {text:"Middle School Teacher", dublicate:false},
    {text:"High School Teacher", dublicate:false},
    {text:"Higher Secondary Teacher", dublicate:false},
    {text:"PU College Teacher", dublicate:false},
    {text:"Director", dublicate:false},
    {text:"Teacher", dublicate:false},
    {text:"PGT", dublicate:false},
    {text:"TGT", dublicate:false},
    {text:"Coordinator", dublicate:false},
    {text:"High School Coordinator", dublicate:false},
    {text:"Primary School Coordinator", dublicate:false},
    {text:"Junior School Principal", dublicate:false},
    {text:"Senior School Principal", dublicate:false},
    {text:"Admin Head", dublicate:false},
    {text:"Nursery School Teacher", dublicate:false},
    {text:"Kindergarten Teacher", dublicate:false},
    {text:"Play School Teacher", dublicate:false},
    {text:"Play School Coordinator", dublicate:false},
    {text:"Special Needs Teacher", dublicate:false},
    {text:"Lecturer", dublicate:false},
    {text:"Assistant Professor", dublicate:false},
    {text:"Associate Professor", dublicate:false},
    {text:"Professor", dublicate:false},
    {text:"Senior Professor", dublicate:false}
]

qualification = [
    {text:"B.A", dublicate:false},
    {text:"M.A", dublicate:false},
    {text:"M.Phil", dublicate:false},
    {text:"Ph.D", dublicate:false},
    {text:"D.Ed", dublicate:false},
    {text:"B.Ed", dublicate:false},
    {text:"M.Ed", dublicate:false},
    {text:"B.Sc", dublicate:false},
    {text:"M.Sc", dublicate:false},
    {text:"UGC NET", dublicate:false},
    {text:"JRF", dublicate:false},
    {text:"Post-Doctoral", dublicate:false},
    {text:"CTET", dublicate:false},
    {text:"NCC", dublicate:false},
    {text:"BTC", dublicate:false}
]

subject = [
    {text:"Science", dublicate:false},
    {text:"Physics", dublicate:false},
    {text:"Chemistry", dublicate:false},
    {text:"Biology", dublicate:false},
    {text:"Social Sciences", dublicate:false},
    {text:"History", dublicate:false},
    {text:"Commerce", dublicate:false},
    {text:"Fashion Studies", dublicate:false},
    {text:"Computer Science", dublicate:false},
    {text:"Mathematics", dublicate:false},
    {text:"Geography", dublicate:false},
    {text:"Civics", dublicate:false},
    {text:"Arts", dublicate:false},
    {text:"Languages", dublicate:false},
    {text:"Literature", dublicate:false},
    {text:"Philosophy", dublicate:false},
    {text:"Multimedia & Web Technology", dublicate:false},
    {text:"Engineering Science", dublicate:false},
    {text:"Marketing", dublicate:false},
    {text:"Legal Studies", dublicate:false},
    {text:"Japanese", dublicate:false},
    {text:"Tibetan", dublicate:false},
    {text:"Political Science", dublicate:false},
    {text:"Biotechnology", dublicate:false},
    {text:"Biochemistry", dublicate:false},
    {text:"Economics", dublicate:false},
    {text:"Home Science", dublicate:false},
    {text:"Painting", dublicate:false},
    {text:"Applied Arts", dublicate:false},
    {text:"Sociology", dublicate:false},
    {text:"Music", dublicate:false},
    {text:"Physical Training", dublicate:false},
    {text:"Health Education", dublicate:false},
    {text:"Psychology", dublicate:false},
    {text:"Massmedia Studies", dublicate:false}
]

language = [
    {text:"Engilsh",dublicate:false},  
    {text:"Urdu",dublicate:false},
    {text:"Hindi",dublicate:false},
    {text:"Bengali",dublicate:false},
    {text:"Marathi",dublicate:false},
    {text:"Arabic",dublicate:false},
    {text:"Telugu",dublicate:false},
    {text:"Sanskrit",dublicate:false},
    {text:"Spanish",dublicate:false},
    {text:"Assamese",dublicate:false},
    {text:"Kannada",dublicate:false},
    {text:"Punjabi",dublicate:false},
    {text:"French",dublicate:false},
    {text:"Russian",dublicate:false},
    {text:"German",dublicate:false},
    {text:"Malayalam",dublicate:false},
    {text:"Tamil",dublicate:false},
    {text:"Odiya",dublicate:false}
]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  edit(){
    this.isenabled = !this.isenabled;
     this.toggle = !this.toggle;
  }
  updatePPic(){
     console.log("filepicker");
  }
  onWorkTap(value) {
     value.dublicate = !value.dublicate;
  }
  openIntro() {
    const dialogRef = this.dialog.open(IntroComponent, {
    width: '100%',
    height: '100%',
    disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openExp() {
    const dialogRef = this.dialog.open(WorkEduComponent, {
    width: '100%',
    height: '100%',
    disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openSkill() {
    const dialogRef = this.dialog.open(SkillsComponent, {
    width: '100%',
    height: '100%',
    disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCert() {
    const dialogRef = this.dialog.open(CertAwardComponent, {
    width: '100%',
    height: '100%',
    disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openAddnInfo() {
    const dialogRef = this.dialog.open(AddnInfoComponent, {
    width: '100%',
    height: '100%',
    disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
