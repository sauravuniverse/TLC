import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addn-info',
  templateUrl: './addn-info.component.html',
  styleUrls: ['./addn-info.component.css']
})
export class AddnInfoComponent implements OnInit {
  xpandStatusResp:boolean;
  xpandStatusRef:boolean;
  xpandStatusRec:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
