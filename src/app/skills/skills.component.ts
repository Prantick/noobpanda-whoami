import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input()
  theme!:boolean;
  @Input()
  data!:Array<Skills>
  viewStatement: string = "";
  leftEnable: boolean = false;
  rightEnable: boolean = true;
  ascii!:Array<string>
  constructor() { }

  ngOnInit(): void {
    this.viewStatement =  this.data[0].statement;
    this.ascii =  this.data[0].ascii;
  }
  navStatement(direction:string): void {
    let i = this.data.findIndex((e) => {
      return e.statement === this.viewStatement;
    });
    let len = this.data.length;
    if(direction == "left" && i==1){
      this.leftEnable= false;
    }
    else if(direction=="right" && i==0 ){
      this.leftEnable = true;
    }
    if(direction == "left" && i==len-1){
      this.rightEnable = true;
    }
    else if(direction=="right" && i==len-2){
      this.rightEnable= false;
    }
    this.viewStatement =  direction==="right" ? this.data[i+1].statement : this.data[i-1].statement;
    this.ascii = direction==="right" ? this.data[i+1].ascii : this.data[i-1].ascii;
  }
}
