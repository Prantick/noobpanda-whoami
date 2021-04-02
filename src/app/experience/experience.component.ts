import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input()
  theme!:boolean;
  @Input()
  data!: Array<Experience>;
  mini: boolean = false;
  viewDescription!: Experience;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.mini = true;
      }
    });
  }

  ngOnInit(): void {
    this.data = this.data.map((e: Experience) => { 
      e.focus = e?.yearEnd === "" ? true : false;
      return e;
    });
    this.viewDescription = this.data.find((e:Experience)=>e?.focus === true) || this.data[this.data.length-1];
  }
  retrieveData(index: number): any {
    this.viewDescription.focus = false;
    this.viewDescription = this.data[index];
    this.viewDescription.focus = true;
  }
}
