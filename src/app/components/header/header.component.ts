import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  faRightFromBracket = faRightFromBracket;
  faRightToBracket = faRightToBracket;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut():void {
    this.tokenService.logOut();
    if(this.router.url.includes('create') || this.router.url.includes('update')) {
      this.router.navigate(['']);
    } else {
      window.location.reload();
    }
  }
}
