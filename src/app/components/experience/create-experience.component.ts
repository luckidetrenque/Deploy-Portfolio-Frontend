import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Experience } from 'src/app/models/experience';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent implements OnInit {
  title: string = 'Crear Experiencia';
  faPlus = faPlus;
  faChevronLeft = faChevronLeft;

  public experience!: Experience;
  public path: string = 'experiences';

  position: string = '';
  dateFrom: number = 0;
  dateTo: number = 0;
  company: string = '';
  description: string = '';

  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit(): void {
  }

  public createExperience() {
    const experience: Experience = new Experience(this.position, this.dateFrom, this.dateTo, this.company, this.description);
    this.dataService.createData(this.path, experience).subscribe({
      next: (response: Experience) => {
        alert(`¡${experience.company} agregada correctamente!`);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    })
  }

}
