import { Component } from '@angular/core';
import { faLinkedin, faGithub, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
}
