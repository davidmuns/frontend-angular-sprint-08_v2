import { PilotDetailComponent } from './components/pilot-detail/pilot-detail.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { UserGuard } from './user.guard';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'starship/all', component: StarshipListComponent, canActivate: [UserGuard]},
  {path: 'starship', component: StarshipDetailComponent, canActivate: [UserGuard]},
  {path: 'pilots', component: PilotDetailComponent, canActivate: [UserGuard]},
  {path: 'reset-password/:tokenPassword', component:  ResetPasswordFormComponent}, 
  {path: '**', redirectTo: '', pathMatch: 'full'}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
