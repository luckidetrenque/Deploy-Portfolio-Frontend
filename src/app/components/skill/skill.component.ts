import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { faPlus, faBarsProgress, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/models/skill';
import { DataService } from 'src/app/services/data.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  title: string = 'Hard & Soft Skills';
  isLogged = false;
  faBarsProgress = faBarsProgress;
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;
  public skills: Skill[] | undefined;
  public skill: Skill | undefined;
  public path: string = 'skills';


  constructor(public dataService: DataService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.getSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getSkills() {
    return this.dataService.getData<Skill[]>(this.path).subscribe({
      next: (response: Skill[]) => {
        this.skills = response;
      },
      error: (error: HttpErrorResponse) => {
       alert(`Error al cargar ${this.title.slice(12,-1)}: ${error.message}`);
      },
    });
  }

  public deleteSkill(id: number) {
    return this.dataService.deleteData(this.path, id).subscribe({
      next: () => {
        this.getSkills();
      },
      error: (error: HttpErrorResponse) => {
       alert(`Error al eliminar ${this.title.slice(12,-1)}: ${error.message}`);
      },
    });
  }

}
