import { Component, Input, OnInit } from '@angular/core';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Projects } from '../models/projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input()
  theme!:boolean;
  @Input()
  data!: Array<Projects>;
  selectedFilter:string = "all"
  projects!: Array<Projects>;
  displayProjects!:Array<Projects>;
  faGithub: IconDefinition = faGithub;

  keys: Array<string> = ['name', 'role', 'review', 'contd', 'contribution', 'techStack'];
  constructor() { }

  ngOnInit(): void {
    this.projects = this.data.map((e)=>{
      e.view = "name";
      return e;
    })
    this.displayProjects = this.projects;
    this.selectedFilter ="all";
  }
  navigate(direction: string, index: number, selectedView: string) {
    let currentIndex = this.keys.findIndex((e) => {
      return e === selectedView;
    });
    if (direction === "right") {
      if(this.keys[currentIndex+1] ==="contd" && !this.displayProjects[index].contd)
        this.displayProjects[index].view = this.keys[currentIndex + 2];
      else
        this.displayProjects[index].view = this.keys[currentIndex + 1];
    }
    else if (direction === 'left') {
      if(this.keys[currentIndex-1] ==="contd" && !this.displayProjects[index].contd)
        this.displayProjects[index].view = this.keys[currentIndex - 2];
      else
      this.displayProjects[index].view = this.keys[currentIndex -1];
    }
    if (this.displayProjects[index].view === "review" && this.displayProjects[index].review.split(" ").length > 20 && !this.displayProjects[index].contd) {
      let arr = this.displayProjects[index].review.split(" ");
      this.displayProjects[index]['contd'] = arr.splice(20, arr.length).join(" ");
      this.displayProjects[index].review = arr.splice(0, 20).join(" ");
    }
  }
  filterProjects($event:any){
    if($event.value === "all"){
      this.displayProjects = this.projects;
    }
    else if($event.value === "featured"){
      this.displayProjects =  this.projects.filter((e:Projects)=> e.flags.featured===true);
    }
    else if($event.value === "work"){
      this.displayProjects =  this.projects.filter((e:Projects)=> e.flags.official===true);
    }
    else if($event.value === "school"){
      this.displayProjects =  this.projects.filter((e:Projects)=> e.flags.school===true);
    }
    else if($event.value === "personal"){
      this.displayProjects =  this.projects.filter((e:Projects)=> e.flags.personal===true);
    }
  }
}
