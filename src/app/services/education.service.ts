import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiUrl = `https://lr-portfolio-backend.onrender.com/api/`;

  constructor(private httpClient: HttpClient) { }

  public listEducation(): Observable<Education> {
    return this.httpClient.get<Education>(`${this.apiUrl}education`);
  }

  public findEducation(id: number): Observable<Education> {
    return this.httpClient.get<Education>(`${this.apiUrl}education/${id}`);
  }

  public findEducationByInstitution(institution: string): Observable<Education> {
    return this.httpClient.get<Education>(`${this.apiUrl}education/institution?i=${institution}`);
  }

  public findEducationByDegree(degree: string): Observable<Education> {
    return this.httpClient.get<Education>(`${this.apiUrl}education/degree?d=${degree}`);
  }

  public createEducation(education: Education): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}education`, education);
  }

  public deleteEducation(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}education/${id}`);
  }

  public updateEducation(id: number, education: Education): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}education/${id}`, education);
  }
}
