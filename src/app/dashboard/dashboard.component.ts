import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  theme:boolean = false || window.matchMedia('(prefers-color-scheme: dark)').matches;
  themeApplied:string = this.theme ? "Dark Mode: On" : "Dark Mode: Off";
  makeItDark:boolean = false;
  constructor(private overlayContainer: OverlayContainer) {
    
  }
  ngOnInit(): void {
    if(this.theme){
      this.makeItDark = true;
      this.overlayContainer.getContainerElement().classList.add("dark")
    }
  }
  changeTheme($event:any){
    this.theme = $event.checked;
    this.themeApplied= this.theme ? "Dark Mode: On" : "Dark Mode: Off";
    if(this.theme){
      this.overlayContainer.getContainerElement().classList.add("dark")
    }
    else{
      this.overlayContainer.getContainerElement().classList.remove("dark")
    }
  }
}
