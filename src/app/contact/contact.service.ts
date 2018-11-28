import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import swal from 'sweetalert2';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  BASE_URL = 'http://interview-contact-submit-api-lb-1009699934.us-east-1.elb.amazonaws.com';
  path = '/contact-us/send';
  constructor(private http: HttpClient) { }

  sendMessage(messageObject: any): Observable<any> {
    return this.http.post(this.BASE_URL + this.path, messageObject, httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    // Client Side Error
    if (error.error instanceof ErrorEvent) {
      swal({
        type: 'error',
        title: 'Error',
        text: error.error.message
      });
    } else {
      // Server side error
      swal({
        type: 'error',
        title: 'Server Error',
        text: error.message
      });
    }

    return throwError(swal({
      type: 'error',
      title: 'Error',
      text: 'An error occurred. Please try again later'
    }));
  }
}
