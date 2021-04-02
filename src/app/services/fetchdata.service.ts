import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { apiUrl } from 'src/environments/environment';
import { DataModel } from '../models/dataModel';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http: HttpClient) { }

  getDetails(url: string): Observable<DataModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.get<DataModel>(url, httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  getQuote(url:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams().set('maxLength', '70')
    }
    return this.http.get(url, httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );;
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(`${error.status}: ${error.error}`);
  }
}
