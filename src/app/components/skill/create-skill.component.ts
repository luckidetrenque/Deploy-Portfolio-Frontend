import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/models/skill';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {
  title: string = 'Crear Skill';
  faPlus = faPlus;
  faChevronLeft = faChevronLeft;

  public skill!: Skill;
  public path: string = 'skills';
  public eventChange = false;

  name: string = '';
  level: number = 0;
  image: string = '';

  constructor(public dataService: DataService, public imageService: ImageService, private router: Router) {}

  ngOnInit(): void {
  }

  public createSkill() {
    const skill: Skill = new Skill(this.name, this.level, this.image='https://firebasestorage.googleapis.com/v0/b/lr-portfolio-frontend.appspot.com/o/images%2Fskills%2Fskill?alt=media&token=57d169de-b140-45aa-9528-027b35ffaa06');
    this.dataService.createData(this.path, skill).subscribe({
      next: (response: Skill) => {
        alert(`¡${skill.name} agregado correctamente!`);
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
    const name = `skill`;
    this.imageService.uploadImage($event, 'skills', name);
  }

}
