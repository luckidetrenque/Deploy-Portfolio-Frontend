import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faPen, faPersonDigging, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Experience } from 'src/app/models/experience';
import { DataService } from 'src/app/services/data.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title: string = 'Experiencia';
  isLogged = false;
  currentYear = (new Date()).getFullYear();
  faPersonDigging = faPersonDigging;
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;

  public experiences: Experience[] | undefined;
  public path: string = 'experiences';

  constructor(public dataService: DataService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.getExperiences();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getExperiences() {
    return this.dataService.getData<Experience[]>(this.path).subscribe({
      next: (response: Experience[]) => {
        this.experiences = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al cargar ${this.title}: ${error.message}`);
      },
    });
  }

  public deleteExperience(id: number) {
    return this.dataService.deleteData(this.path, id).subscribe({
      next: () => {
        this.getExperiences();
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al eliminar ${this.title}: ${error.message}`);
      },
    });
  }
}
