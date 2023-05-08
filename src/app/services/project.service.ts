import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = `${environment.apiUrl}/api/`;

  constructor(private httpClient: HttpClient) { }

  public listProject(): Observable<Project> {
    return this.httpClient.get<Project>(`${this.apiUrl}projects`);
  }

  public findProject(id: number): Observable<Project> {
    return this.httpClient.get<Project>(`${this.apiUrl}projects/${id}`);
  }

  public findProjectByName(name: string): Observable<Project> {
    return this.httpClient.get<Project>(`${this.apiUrl}projects/name?n=${name}`);
  }

  public createProject(project: Project): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}projects`, project);
  }

  public deleteProject(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}projects/${id}`);
  }

  public updateProject(id: number, project: Project): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}projects/${id}`, project);
  }
}
