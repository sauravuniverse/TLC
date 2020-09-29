import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  xpandStatusSkill:boolean;
  xpandStatusLang:boolean;
  skill=[
    {text:"Effective Communications", dublicate:false},
    {text:"Listening Skills",dublicate:false},
    {text:"Interpersonal Skills",dublicate:false},
    {text:"Negotiation Skills",dublicate:false},
    {text:"Eliciting Skills",dublicate:false},
    {text:"Student Motivation",dublicate:false},
    {text:"Goal Settings",dublicate:false},
    {text:"Group Dynamics",dublicate:false},
    {text:"Problem Solving",dublicate:false},
    {text:"Effective Communication",dublicate:false},
    {text:"Empathy",dublicate:false},
    {text:"kindness",dublicate:false},
    
  ];
  Proficiency = ["Proficient", "Intermediate", "Basic Proficiency"];
  selectedProf:string;
  constructor() { }
  
  ngOnInit(): void {
  }
  onSkillTap(item){
    item.dublicate = !item.dublicate;
  }

}

