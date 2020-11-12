import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Employee } from './employee'
import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  

}
