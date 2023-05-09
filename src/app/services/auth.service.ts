import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NewUserDto } from '../models/new-user-dto';
import { Observable } from 'rxjs';
import { LoginUserDto } from '../models/login-user-dto';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `https://lr-portfolio-backend.onrender.com/auth`;

  constructor(private httpClient: HttpClient) { }

  public register(newUser: NewUserDto): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/register`, newUser);
  }

  public login(loginUser: LoginUserDto): Observable<JwtDto> {
    return this.httpClient.post<any>(`${this.apiUrl}/login`, loginUser);
  }
}
