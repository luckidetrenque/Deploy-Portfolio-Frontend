import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = `${environment.apiUrl}/api/`;

  constructor(private httpClient: HttpClient) { }

  public listPersons(): Observable<Person> {
    return this.httpClient.get<Person>(`${this.apiUrl}persons`);
  }

  public findPerson(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.apiUrl}persons/${id}`);
  }

  public findPersonByNameAndSurname(name: string, surname: string): Observable<Person> {
    return this.httpClient.get<Person>(`${this.apiUrl}persons/fullname?n=${name}&s=${surname}`);
  }

  public createPerson(person: Person): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}persons`, person);
  }

  public deletePerson(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}persons/${id}`);
  }

  public updatePerson(id: number, person: Person): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}persons/${id}`, person);
  }

}
