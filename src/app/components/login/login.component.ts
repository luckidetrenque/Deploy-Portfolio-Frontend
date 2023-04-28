import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { LoginUserDto } from 'src/app/models/login-user-dto';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Iniciar Sesión';
  faLogin = faRightToBracket;
  faChevronLeft = faChevronLeft;
  isLogged = false;
  isLoginFail = false;
  loginUser!: LoginUserDto;
  username!: string;
  password!: string;
  roles: string[] = [];
  error!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  userLogin(): void {
    this.loginUser = new LoginUserDto(this.username, this.password);
    this.authService.login(this.loginUser).subscribe({
      next: (data) => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);

        (error: any) => {
          this.isLogged = false;
          this.isLoginFail = true;
          this.error = error.error.message;
        };
      },
    });
  }
}
