import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './pages/main/main.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ResultsComponent } from './pages/results/results.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { BasesComponent } from './pages/bases/bases.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { OrganizersComponent } from './sections/organizers/organizers.component';
import { WhoWeAreComponent } from './sections/who-we-are/who-we-are.component';
import { TechnologiesComponent } from './sections/technologies/technologies.component';
import { UseCasesComponent } from './sections/use-cases/use-cases.component';
import { TechTalksComponent } from './sections/tech-talks/tech-talks.component';
import { UniversitiesComponent } from './sections/universities/universities.component';
import { PrizesComponent } from './sections/prizes/prizes.component';
import { PrizesPageComponent } from './pages/prizes-page/prizes-page.component';
import { ThirdHeaderComponent } from './components/third-header/third-header.component';
import { WhoWeArePageComponent } from './pages/who-we-are-page/who-we-are-page.component';
import { TechTalksPageComponent } from './pages/tech-talks-page/tech-talks-page.component';
import { PdfViewerModule }   from 'ng2-pdf-viewer';
import { DialogUniversityComponent } from './components/dialog-university/dialog-university.component';
import { DialogUseCaseComponent } from './components/dialog-use-case/dialog-use-case.component';
import { AnimationComponent } from './components/animation/animation.component';
import { VideoPopUpComponent } from './components/video-pop-up/video-pop-up.component';
import { UseCasesPageComponent } from './pages/use-cases-page/use-cases-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralDialogComponent } from './components/general-dialog/general-dialog.component';
import { DialogInscriptionComponent } from './components/dialog-inscription/dialog-inscription.component';
import { DialogValidationComponent } from './components/dialog-validation/dialog-validation.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

//Dependiencias para cambio de idioma
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

//Me va a identificar los archivos json
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InscriptionComponent,
    ResultsComponent,
    ScheduleComponent,
    BasesComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent,
    SecondaryHeaderComponent,
    OrganizersComponent,
    WhoWeAreComponent,
    TechnologiesComponent,
    UseCasesComponent,
    TechTalksComponent,
    UniversitiesComponent,
    PrizesComponent,
    PrizesPageComponent,
    ThirdHeaderComponent,
    WhoWeArePageComponent,
    TechTalksPageComponent,
    DialogUniversityComponent,
    DialogUseCaseComponent,
    AnimationComponent,
    VideoPopUpComponent,
    UseCasesPageComponent,
    GeneralDialogComponent,
    DialogInscriptionComponent,
    DialogValidationComponent,
  
  ],
  imports: [  
    BrowserAnimationsModule,
    MaterialModule,
    PdfViewerModule,
    ReactiveFormsModule,
    FormsModule,

    BrowserModule,
    HttpClientModule,

    //Configuración del loader
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }  
    }), 
    AppRoutingModule

  ] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
