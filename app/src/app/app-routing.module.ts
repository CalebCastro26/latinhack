import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BasesComponent } from './pages/bases/bases.component';
import { FaqComponent } from './pages/faq/faq.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ResultsComponent } from './pages/results/results.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { PrizesPageComponent } from './pages/prizes-page/prizes-page.component';
import { WhoWeArePageComponent } from './pages/who-we-are-page/who-we-are-page.component';
import { TechTalksPageComponent } from './pages/tech-talks-page/tech-talks-page.component';
import { UseCasesPageComponent} from './pages/use-cases-page/use-cases-page.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'prizes', component: PrizesPageComponent },
  { path: 'bases', component: BasesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'whoWeAre', component: WhoWeArePageComponent },
  { path: 'techTalks', component: TechTalksPageComponent },
  { path: 'useCases', component: UseCasesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
