import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  roles: Array<string> = [];

  constructor() {}

  public getToken(): string|null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getUsername(): string | null {
    return window.sessionStorage.getItem(USERNAME_KEY);
  }

  public setUsername(username: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (window.sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(window.sessionStorage.getItem(AUTHORITIES_KEY)!).forEach(
        (authority: any) => {
          this.roles.push(authority.authority);
        }
      );
    }
    return this.roles;
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public logOut(): void{
    window.sessionStorage.clear();
  }
}
