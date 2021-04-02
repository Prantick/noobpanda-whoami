import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { apiUrl } from 'src/environments/environment';
import { DataModel } from '../models/dataModel';
import { FetchdataService } from '../services/fetchdata.service';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.css']
})
export class WhoamiComponent implements OnInit {
  @Input()
  theme!:boolean;
  
  confirmSmallIndex: boolean = false;
  allData!:DataModel;
  name:string="Prantick Das";
  quote:string="There is something for everything."
  source:string = `${apiUrl.url}/assets/icons/logo175.png`;
  constructor(private fetchData: FetchdataService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchData.getDetails(`${apiUrl.url}/assets/data.json`).subscribe(
      (data: DataModel) => {
        this.allData = {...data}
        this.name = this.allData.about.name;
      },
      (error) => {
        this.openSnackBar(JSON.stringify(error), "Dismiss")
      }
    );
    this.fetchQuote();
  }
  getIndex($event: number) {
    if ($event >= 2) {
      this.confirmSmallIndex = true;
      this.source =`${apiUrl.url}/assets/icons/logo75.png`;
    }
    else {
      this.confirmSmallIndex = false
    }
  }
  fetchQuote(){
    this.fetchData.getQuote(`${apiUrl.quotesUrl}`).subscribe(
      (data:any)=>{
        this.quote = data?.content || "There is something for everything."
      },
      (error)=>{
        this.openSnackBar(error?.statusMessage || "Quote not found", "Dismiss")
      }
    )
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
