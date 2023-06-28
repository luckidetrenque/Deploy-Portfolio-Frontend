import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrl = `https://lr-portfolio-backend.onrender.com/api/`;

  constructor(private httpClient: HttpClient) { }

  public listExperience(): Observable<Experience> {
    return this.httpClient.get<Experience>(`${this.apiUrl}experiences`);
  }

  public findExperience(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(`${this.apiUrl}experiences/${id}`);
  }

  public findExperienceByPosition(position: string): Observable<Experience> {
    return this.httpClient.get<Experience>(`${this.apiUrl}experiences/position?p=${position}`);
  }

  public createExperience(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}experiences`, experience);
  }

  public deleteExperience(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}experiences/${id}`);
  }

  public updateExperience(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}experiences/${id}`, experience);
  }
}
