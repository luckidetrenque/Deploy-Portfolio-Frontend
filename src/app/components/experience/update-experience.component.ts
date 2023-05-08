import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faPen, faChevronLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Experience } from 'src/app/models/experience';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit {

  title: string = 'Editar Experiencia';
  faPen = faPen;
  faChevronLeft = faChevronLeft;
  faSave = faSave;

  public experience!: Experience;
  public path: string = 'experiences';

  constructor(public dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getOneData<Experience>(this.path, id).subscribe({
      next: (response: Experience) => {
        this.experience = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    });

  }

  public updateExperience() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.updateData(this.path, id, this.experience).subscribe({
      next: () => {
        alert(`¡Experiencia modificada correctamente!`);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    });
  }
}
