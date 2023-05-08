import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faPen, faChevronLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  title: string = 'Editar Proyecto';
  faPen = faPen;
  faChevronLeft = faChevronLeft;
  faSave = faSave;

  public project!: Project;
  public path: string = 'projects';
  public eventChange = false;

  constructor(public dataService: DataService, public imageService: ImageService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getOneData<Project>(this.path, id).subscribe({
      next: (response: Project) => {
        this.project = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    });

  }

  public updateProject() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.project.image = this.imageService.url;
    this.dataService.updateData(this.path, id, this.project).subscribe({
      next: () => {
        alert(`¡Proyecto modificado correctamente!`);
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
    const name = `project-${id}`;
    this.imageService.uploadImage($event, 'projects', name);
  }
}
