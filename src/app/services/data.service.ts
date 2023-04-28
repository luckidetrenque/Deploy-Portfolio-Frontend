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

  public getOneData(path: string, id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}${path}/${id}`);
  }

  public getData<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}${path}`);
  }

  public createData<T>(path: string, body: T): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}${path}`, body);
  }

  public deleteData(path: string, id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${path}/${id}`);
  }

  public updateData<T>(path: string, id: number, body: T): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}${path}/${id}`, body);
  }
}
