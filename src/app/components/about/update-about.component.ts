import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faPen, faChevronLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-update-about',
  templateUrl: './update-about.component.html',
  styleUrls: ['./update-about.component.css']
})
export class UpdateAboutComponent implements OnInit {

  title: string = 'Editar Persona';
  faPen = faPen;
  faChevronLeft = faChevronLeft;
  faSave = faSave;

  public person!: Person;
  public path: string = 'persons';

  constructor(public dataService: DataService, public imageService: ImageService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    // this.person.photo = this.imageService.url;
    this.dataService.getOneData(this.path, id).subscribe({
      next: (response: Person) => {
        this.person = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    });

  }

  public updatePerson() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.updateData(this.path, id, this.person).subscribe({
      next: () => {
        alert(`¡Persona modificada correctamente!`);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    });
  }

  public uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = `perfil`;
    this.imageService.uploadImage($event, name);
  }
}
