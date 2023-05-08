import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl = `${environment.apiUrl}/api/`;

  constructor(private httpClient: HttpClient) { }

  public listSkill(): Observable<Skill> {
    return this.httpClient.get<Skill>(`${this.apiUrl}skills`);
  }

  public findSkill(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(`${this.apiUrl}skills/${id}`);
  }

  public findSkillByName(name: string): Observable<Skill> {
    return this.httpClient.get<Skill>(`${this.apiUrl}skills/name?n=${name}`);
  }

  public createSkill(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}skills`, skill);
  }

  public deleteSkill(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}skills/${id}`);
  }

  public updateSkill(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}skills/${id}`, skill);
  }
}
