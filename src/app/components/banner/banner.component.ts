import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from 'src/app/services/image.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  title: string = 'Banner';
  isLogged = false;
  faPen = faPen;
  faChevronLeft = faChevronLeft;
  faSave = faSave;

  image = '';

  constructor(private router: Router, private tokenService: TokenService, public imageService: ImageService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public uploadImage($event: any) {
    // const id = this.activatedRoute.snapshot.params['id'];
    const name = `banner`;
    this.imageService.uploadImage($event, '', name);
  }

  public reloadPage() {
    window.location.reload();
  }

}
