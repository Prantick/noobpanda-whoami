import { Component, OnInit } from '@angular/core';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent {
  source:string = `${apiUrl.url}/assets/icons/logo175.png`;
  constructor() { }
    

}
