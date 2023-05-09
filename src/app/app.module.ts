import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SocialComponent } from './components/social/social.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateEducationComponent } from './components/education/create-education.component';
import { UpdateEducationComponent } from './components/education/update-education.component';
import { UpdateAboutComponent } from './components/about/update-about.component';
import { CreateExperienceComponent } from './components/experience/create-experience.component';
import { UpdateExperienceComponent } from './components/experience/update-experience.component';
import { CreateProjectComponent } from './components/project/create-project.component';
import { UpdateProjectComponent } from './components/project/update-project.component';
import { CreateSkillComponent } from './components/skill/create-skill.component';
import { UpdateSkillComponent } from './components/skill/update-skill.component';
import { interceptorProvider } from './services/interceptor.service';
import { ArrayFixPipe } from './pipes/array-fix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SocialComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HomeComponent,
    FooterComponent,
    SkillComponent,
    ProjectComponent,
    RegisterComponent,
    LoginComponent,
    RegisterComponent,
    CreateEducationComponent,
    UpdateEducationComponent,
    UpdateAboutComponent,
    CreateExperienceComponent,
    UpdateExperienceComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    CreateSkillComponent,
    UpdateSkillComponent,
    ArrayFixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
