import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faLink, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProjectComponent implements OnInit {
  title: string = 'Proyectos';
  isLogged = false;
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;
  faLink = faLink;
  faGithub = faGithub;

  public projects: Project[] | undefined;
  public path: string = 'projects';

  constructor(public dataService: DataService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.getProjects();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getProjects() {
    return this.dataService.getData<Project[]>(this.path).subscribe({
      next: (response: Project[]) => {
        this.projects = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al cargar ${this.title.slice(0,-1)}: ${error.message}`);
      },
    });
  }

  public deleteProject(id: number) {
    return this.dataService.deleteData(this.path, id).subscribe({
      next: () => {
        this.getProjects();
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al eliminar Proyecto: ${error.message}`);
      },
    });
  }

}
