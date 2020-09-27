import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-work-edu',
  templateUrl: './work-edu.component.html',
  styleUrls: ['./work-edu.component.css']
})
export class WorkEduComponent implements OnInit {
  todayDate:Date = new Date();
  xpandStatusExp:boolean;
  xpandStatusEdu:boolean;
  qualification = ["UG", "PG","PhD", "PDS", "BEd"];
  selectedValue: string;
  constructor() { }

  ngOnInit(): void {
  }

}
