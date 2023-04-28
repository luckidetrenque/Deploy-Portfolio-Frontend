import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NewUserDto } from 'src/app/models/new-user-dto';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLogged = false;
  isRegister = false;
  isRegisterFail = false;
  newUser!: NewUserDto;
  name!: string;
  surname!: string;
  username!: string;
  email!: string;
  password!: string;
  roles: string[] = [];
  error!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.newUser = new NewUserDto(
      this.name,
      this.surname,
      this.username,
      this.email,
      this.password
    );
    this.authService.register(this.newUser).subscribe({
      next: (data) => {
        this.isRegister = true;
        this.isRegisterFail = false;
      (error: any) => {
          this.isRegisterFail = true;
          this.error = error.error.mensaje;
        };
      },
    });
  }
}
