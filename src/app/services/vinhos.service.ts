import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import { Vinho } from '../models/vinho';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
};

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

  cadastrarVinho(vinho: Vinho): Observable<Vinho> {
    return this.http.post<Vinho>('api/vinhos', vinho, httpOptions)
      .pipe(
          tap((vinho: Vinho) => console.log(`Vinho adicionado com Id=${vinho.id}`)),
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
