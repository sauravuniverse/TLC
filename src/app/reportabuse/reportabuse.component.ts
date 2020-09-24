import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {LoginService} from '../login/login.service'



@Component({
  selector: 'app-reportabuse',
  templateUrl: './reportabuse.component.html',
  styleUrls: ['./reportabuse.component.css']
})

export class ReportabuseComponent implements OnInit {

  dataSource: MatTableDataSource<unknown>;
  
  displayedColumns: string[] = ['postid', 'posteduser', 'reporteduser', 'postdetails','category','action','posteddate','reporteddate','disposeddate'];
  constructor(public httService:LoginService) { }
  
  ngOnInit() {
    this.httService.Matcardtitlename="ReportAbuse"

  }
 
  

}
export interface PeroidicElement {
  postid:number;
  posteduser:string;
  reporteduser:string;
  postdetails:String;
  category:string;
  action:String;
  posteddate:String;
  reporteddate:String;
  disposeddate:String;
  
  
}
  

