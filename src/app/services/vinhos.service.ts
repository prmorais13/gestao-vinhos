import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import { Vinho } from '../models/vinho';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinhosService {

  constructor(
    private http: HttpClient
  ) { }

  getVinhos(): Observable<Vinho[]> {
    return this.http.get<Vinho[]>('api/vinhos')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro', error.error.message);
    } else {
      console.error(
        `O Backend retornou o código ${error.status}, o corpo foi: ${error.error}`
      );
    }

    return throwError('Ocorreu um erro, tente novamente!');
  }
}
