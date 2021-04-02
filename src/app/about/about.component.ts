import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import {
  faGithubAlt,
  faLinkedinIn,
  faGoogle,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { About } from '../models/about';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @Input()
  theme!:boolean;
  @Input()
  data!: About;

  mini: boolean = false;
  faGithubAlt: IconDefinition = faGithubAlt;
  faLinkedIn: IconDefinition = faLinkedinIn;
  faGoogle: IconDefinition = faGoogle;
  faTwitter: IconDefinition = faTwitter;

  mediaLinks: Array<any> = [];
  introduction: string = '';
  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakPointObserver
      .observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Handset])
      .subscribe((result) => {
        if (result.matches) {
          this.mini = true;
        }
      });
    this.introduction = this.data?.intro;
    this.mediaLinks = [
      {
        name: 'GitHub',
        icon: this.faGithubAlt,
        url: this.data.links['github'],
        focus:false
      },
      {
        name: 'LinkedIn',
        icon: this.faLinkedIn,
        url: this.data.links['linkedin'],
        focus:false
      },
      {
        name: 'Google',
        icon: this.faGoogle,
        url: this.data.links['gmail'],
        focus:false
      },
      {
        name: 'Twitter',
        icon: this.faTwitter,
        url: this.data.links['twitter'],
        focus:false
      },
    ];
  }
}
