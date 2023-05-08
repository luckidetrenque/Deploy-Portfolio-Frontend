import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  title: string = 'Crear Proyecto';
  faPlus = faPlus;
  faChevronLeft = faChevronLeft;

  public project!: Project;
  public path: string = 'projects';
  public eventChange = false;

  name: string = '';
  date: number = 0;
  description: string = '';
  link1: string = '';
  link2: string = '';
  image: string = '';

  constructor(public dataService: DataService, public imageService: ImageService, private router: Router) {}

  ngOnInit(): void {
  }

  public createProject() {
    const project: Project = new Project(this.name, this.date, this.description, this.link1, this.link2, this.image = 'https://firebasestorage.googleapis.com/v0/b/lr-portfolio-frontend.appspot.com/o/images%2Fprojects%2Fproject?alt=media&token=1547090f-fe99-40ef-9324-2ea44b6d94c6');
    this.dataService.createData(this.path, project).subscribe({
      next: (response: Project) => {
        alert(`¡${project.name} agregado correctamente!`);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    })
  }

  public uploadImage($event: any) {
    this.eventChange = true;
    const name = `project`;
    this.imageService.uploadImage($event, 'projects', name);
  }

}
