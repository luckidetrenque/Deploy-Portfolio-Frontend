import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateAboutComponent } from './components/about/update-about.component';
import { CreateEducationComponent } from './components/education/create-education.component';
import { UpdateEducationComponent } from './components/education/update-education.component';
import { CreateExperienceComponent } from './components/experience/create-experience.component';
import { UpdateExperienceComponent } from './components/experience/update-experience.component';
import { CreateProjectComponent } from './components/project/create-project.component';
import { UpdateProjectComponent } from './components/project/update-project.component';
import { CreateSkillComponent } from './components/skill/create-skill.component';
import { UpdateSkillComponent } from './components/skill/update-skill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'update-about/:id', component: UpdateAboutComponent},
  {path: 'create-education', component: CreateEducationComponent},
  {path: 'update-education/:id', component: UpdateEducationComponent},
  {path: 'create-experience', component: CreateExperienceComponent},
  {path: 'update-experience/:id', component: UpdateExperienceComponent},
  {path: 'create-project', component: CreateProjectComponent},
  {path: 'update-project/:id', component: UpdateProjectComponent},
  {path: 'create-skill', component: CreateSkillComponent},
  {path: 'update-skill/:id', component: UpdateSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
