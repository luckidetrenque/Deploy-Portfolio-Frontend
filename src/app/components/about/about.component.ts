import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faTrash, faPen, faAdd } from '@fortawesome/free-solid-svg-icons';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title: string = 'Acerca de mi';
  isLogged = false;
  faTrash = faTrash;
  faPen = faPen;
  faAdd = faAdd;

  public person: Person | undefined;
  public path: string = 'persons';

  constructor(public dataService: DataService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.getPerson();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getPerson() {
    this.dataService.getOneData<Person>(this.path, 1).subscribe({
      next: (response: Person) => {
        this.person = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(`Error al cargar Persona: ${error.message}`);
      },
    });
  }
}
