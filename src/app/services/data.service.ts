import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const HTTPOptions: Object = {

  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  }),
  responseType: 'json'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = `https://lr-portfolio-backend.onrender.com/api/`;

  constructor(private httpClient: HttpClient) {}

  public getOneData<T>(path: string, id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}${path}/${id}`, HTTPOptions);
  }

  public getData<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}${path}`, HTTPOptions);
  }

  public createData<T>(path: string, body: T): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}${path}`, body, HTTPOptions);
  }

  public deleteData(path: string, id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${path}/${id}`, HTTPOptions);
  }

  public updateData<T>(path: string, id: number, body: T): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}${path}/${id}`, body, HTTPOptions);
  }
}
