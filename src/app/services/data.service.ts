import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = `${environment.apiUrl}/api/`;

  constructor(private httpClient: HttpClient) {}

  public getOneData<T>(path: string, id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}${path}/${id}`, {responseType: 'text' as 'json'});
  }

  public getData<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}${path}`, {responseType: 'text' as 'json'});
  }

  public createData<T>(path: string, body: T): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}${path}`, body, {responseType: 'text' as 'json'});
  }

  public deleteData(path: string, id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${path}/${id}`, {responseType: 'text' as 'json'});
  }

  public updateData<T>(path: string, id: number, body: T): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}${path}/${id}`, body, {responseType: 'text' as 'json'});
  }
}
