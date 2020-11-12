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

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/employees')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/employees/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.url + '/employees', JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateEmployee(id, employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/employees/' + id,
      JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteEmployee(id) {
    return this.http.delete<Employee>(this.url + '/employees/' +
      id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error){
    let errorMessage = '';
    
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${ error.status }\Message: ${ error.message }`
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
