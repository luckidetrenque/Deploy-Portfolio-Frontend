import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faPen, faChevronLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/models/skill';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {

  title: string = 'Editar Skill';
  faPen = faPen;
  faChevronLeft = faChevronLeft;
  faSave = faSave;

  public skill!: Skill;
  public path: string = 'skills';

  constructor(public dataService: DataService, public imageService: ImageService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getOneData(this.path, id).subscribe({
      next: (response: Skill) => {
        this.skill = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    });

  }

  public updateSkill() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.updateData(this.path, id, this.skill).subscribe({
      next: (response: Skill) => {
        alert(`¡Skill modificada correctamente!`);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al ${this.title}: ${error.message}`);
        this.router.navigate(['']);
      },
    });
  }

  public uploadImage($event: any) {
    const id = this.skill.id;
    const name = `education_${id}`;
    this.imageService.uploadImage($event, name);
  }
}
