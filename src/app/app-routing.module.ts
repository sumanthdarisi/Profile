import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'WorkExperience', component: WorkExperienceComponent},
  {path: 'Academics', component: EducationComponent},
  {path: 'Portfolio', component: PortfolioComponent},
  {path: '', component: HomeComponent},
  { path: '',   redirectTo: '/Home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
