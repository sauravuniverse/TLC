import { Component, OnInit } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  xpandStatusIntro:boolean;
  xpandStatusSum:boolean
  constructor() { }

  ngOnInit(): void {
  }

}
