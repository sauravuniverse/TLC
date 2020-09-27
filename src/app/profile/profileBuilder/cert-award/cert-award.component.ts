import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cert-award',
  templateUrl: './cert-award.component.html',
  styleUrls: ['./cert-award.component.css']
})
export class CertAwardComponent implements OnInit {
  todayDate:Date = new Date();
  xpandStatusCrt:boolean;
  xpandStatusHon:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
