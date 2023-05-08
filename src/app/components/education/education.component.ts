import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faDownload, faPen, faPlus, faSchoolFlag, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/models/education';
import { DataService } from 'src/app/services/data.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  title: string = 'Educación';
  isLogged = false;
  faSchoolFlag = faSchoolFlag;
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;
  faDownload = faDownload;

  public educations: Education[] | undefined;
  public path: string = 'education';

  constructor(public dataService: DataService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.getEducations();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getEducations() {
    this.dataService.getData<Education[]>(this.path).subscribe({
      next: (response: Education[]) => {
        this.educations = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al cargar ${this.title}: ${error.message}`);
      },
    });
  }

  public deleteEducation(id: number) {
    if(id != undefined) {
      this.dataService.deleteData(this.path, id).subscribe({
        next: () => {
          this.getEducations();
        },
        error: (error: HttpErrorResponse) => {
          alert(`Error al eliminar ${this.title}: ${error.message}`);
        },
      });
    }
  }
}
