import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft, faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/models/education';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit {

  title: string = 'Editar Educación';
  faPen = faPen;
  faChevronLeft = faChevronLeft;
  faSave = faSave;

  public education!: Education;
  public path: string = 'education';
  public eventChange = false;

  constructor(public dataService: DataService, public imageService: ImageService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getOneData<Education>(this.path, id).subscribe({
      next: (response: Education) => {
        this.education = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    });

  }

  public updateEducation() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.education.logo = this.imageService.url;
    this.dataService.updateData(this.path, id, this.education).subscribe({
      next: () => {
        alert(`¡Educación modificada correctamente!`);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    });
  }

  public uploadImage($event: any) {
    this.eventChange = true;
    const id = this.activatedRoute.snapshot.params['id'];
    const name = `education-${id}`;
    this.imageService.uploadImage($event, 'education', name);
  }
}
