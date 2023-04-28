import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/models/education';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent implements OnInit {
  title: string = 'Crear Educación';
  faPlus = faPlus;
  faChevronLeft = faChevronLeft;

  public education!: Education;
  public path: string = 'education';

  institution: string = '';
  logo: string = '';
  degree: string = '';
  dateFrom: number = 0;
  dateTo: number = 0;

  constructor(public dataService: DataService, public imageService: ImageService, private router: Router) {}

  ngOnInit(): void {
  }

  public createEducation($event: any) {
    const education: Education = new Education(this.institution, this.logo, this.degree, this.dateFrom, this.dateTo);
    this.dataService.createData(this.path, education).subscribe({
      next: (response: Education) => {
        this.uploadImage($event);
        alert(`¡${education.degree} agregada correctamente!`);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al crear nueva Educación: ${error.message}`);
        this.router.navigate(['']);
      },
    })
  }

  public uploadImage($event: any) {
    const id = this.education.id;
    const name = `education_${id}`;
    this.imageService.uploadImage($event, name);
  }
}
