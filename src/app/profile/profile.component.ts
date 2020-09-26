import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


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
    {text:"Principal", row:2, col:0, dublicate:false},
    {text:"Vice Principal", row:2, col:1, dublicate:false},
    {text:"Headmistress", row:2, col:2, dublicate:false},
    {text:"Headmaster", row:2, col:3, dublicate:false},
    {text:"Primary Teacher", row:2, col:4, dublicate:false},
    {text:"Middle School Teacher", row:3, col:0, dublicate:false},
    {text:"High School Teacher", row:3, col:1, dublicate:false},
    {text:"Higher Secondary Teacher", row:3, col:2, dublicate:false},
    {text:"PU College Teacher", row:3, col:3, dublicate:false},
    {text:"Director", row:3, col:4, dublicate:false},
    {text:"Teacher", row:3, col:0, dublicate:false},
    {text:"PGT", row:4, col:1, dublicate:false},
    {text:"TGT", row:4, col:2, dublicate:false},
    {text:"Coordinator", row:4, col:3, dublicate:false},
    {text:"High School Coordinator", row:4, col:4, dublicate:false},
    {text:"Primary School Coordinator", row:4, col:0, dublicate:false},
    {text:"Junior School Principal", row:5, col:1, dublicate:false},
    {text:"Senior School Principal", row:5, col:2, dublicate:false},
    {text:"Admin Head", row:5, col:3, dublicate:false},
    {text:"Nursery School Teacher", row:5, col:4, dublicate:false},
    {text:"Kindergarten Teacher", row:5, col:0, dublicate:false},
    {text:"Play School Teacher", row:6, col:1, dublicate:false},
    {text:"Play School Coordinator", row:6, col:2, dublicate:false},
    {text:"Special Needs Teacher", row:6, col:3, dublicate:false},
    {text:"Lecturer", row:6, col:4, dublicate:false},
    {text:"Assistant Professor", row:6, col:0, dublicate:false},
    {text:"Associate Professor", row:7, col:1, dublicate:false},
    {text:"Professor", row:7, col:2, dublicate:false},
    {text:"Senior Professor", row:7, col:3, dublicate:false}
]

qualification = [
    {text:"B.A", row:9, col:0, dublicate:false},
    {text:"M.A", row:9, col:1, dublicate:false},
    {text:"M.Phil", row:9, col:2, dublicate:false},
    {text:"Ph.D", row:9, col:3, dublicate:false},
    {text:"D.Ed", row:9, col:4, dublicate:false},
    {text:"B.Ed", row:10, col:0, dublicate:false},
    {text:"M.Ed", row:10, col:1, dublicate:false},
    {text:"B.Sc", row:10, col:2, dublicate:false},
    {text:"M.Sc", row:10, col:3, dublicate:false},
    {text:"UGC NET", row:10, col:4, dublicate:false},
    {text:"JRF", row:11, col:0, dublicate:false},
    {text:"Post-Doctoral", row:11, col:1, dublicate:false},
    {text:"CTET", row:11, col:2, dublicate:false},
    {text:"NCC", row:11, col:3, dublicate:false},
    {text:"BTC", row:11, col:4, dublicate:false}
]

subject = [
    {text:"Science", row:13, col:0, dublicate:false},
    {text:"Physics", row:13, col:1, dublicate:false},
    {text:"Chemistry", row:13, col:2, dublicate:false},
    {text:"Biology", row:13, col:3, dublicate:false},
    {text:"Social Sciences", row:13, col:4, dublicate:false},
    {text:"History", row:14, col:0, dublicate:false},
    {text:"Commerce", row:14, col:1, dublicate:false},
    {text:"Fashion Studies", row:14, col:2, dublicate:false},
    {text:"Computer Science", row:14, col:3, dublicate:false},
    {text:"Mathematics", row:14, col:4, dublicate:false},
    {text:"Geography", row:15, col:0, dublicate:false},
    {text:"Civics", row:15, col:1, dublicate:false},
    {text:"Arts", row:15, col:2, dublicate:false},
    {text:"Languages", row:15, col:3, dublicate:false},
    {text:"Literature", row:15, col:4, dublicate:false},
    {text:"Philosophy", row:16, col:0, dublicate:false},
    {text:"Multimedia & Web Technology", row:16, col:1, dublicate:false},
    {text:"Engineering Science", row:16, col:2, dublicate:false},
    {text:"Marketing", row:16, col:3, dublicate:false},
    {text:"Legal Studies", row:16, col:4, dublicate:false},
    {text:"Japanese", row:17, col:0, dublicate:false},
    {text:"Tibetan", row:17, col:1, dublicate:false},
    {text:"Political Science", row:17, col:2, dublicate:false},
    {text:"Biotechnology", row:17, col:3, dublicate:false},
    {text:"Biochemistry", row:17, col:4, dublicate:false},
    {text:"Economics", row:18, col:0, dublicate:false},
    {text:"Home Science", row:18, col:1, dublicate:false},
    {text:"Painting", row:18, col:2, dublicate:false},
    {text:"Applied Arts", row:18, col:3, dublicate:false},
    {text:"Sociology", row:18, col:4, dublicate:false},
    {text:"Music", row:19, col:0, dublicate:false},
    {text:"Physical Training", row:19, col:1, dublicate:false},
    {text:"Health Education", row:19, col:2, dublicate:false},
    {text:"Psychology", row:19, col:3, dublicate:false},
    {text:"Massmedia Studies", row:19, col:4, dublicate:false}
]

language = [
    {text:"Engilsh", row:21, col:0,  dublicate:false},  
    {text:"Urdu", row:21, col:1,  dublicate:false},
    {text:"Hindi", row:21, col:2,  dublicate:false},
    {text:"Bengali", row:21, col:3,  dublicate:false},
    {text:"Marathi", row:21, col:4,  dublicate:false},
    {text:"Arabic", row:22, col:0,  dublicate:false},
    {text:"Telugu", row:22, col:1,  dublicate:false},
    {text:"Sanskrit", row:22, col:2,  dublicate:false},
    {text:"Spanish", row:22, col:3,  dublicate:false},
    {text:"Assamese", row:22, col:4,  dublicate:false},
    {text:"Kannada", row:23, col:0,  dublicate:false},
    {text:"Punjabi", row:23, col:1,  dublicate:false},
    {text:"French", row:23, col:2,  dublicate:false},
    {text:"Russian", row:23, col:3,  dublicate:false},
    {text:"German", row:23, col:4,  dublicate:false},
    {text:"Malayalam", row:24, col:0,  dublicate:false},
    {text:"Tamil", row:24, col:1,  dublicate:false},
    {text:"Odiya", row:24, col:2,  dublicate:false}
]
  constructor() { }

  ngOnInit(): void {
  }
  edit(){
     
     this.toggle = !this.toggle;
  }
  updatePPic(){
     console.log("filepicker");
  }
  onWorkTap(value) {
    console.log(value.dublicate);
     value.dublicate = !value.dublicate;
     console.log(value.dublicate)
  }

}
