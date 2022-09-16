import { UserService } from 'src/app/services/user.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { StarshipService } from './services/starship.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SliderFilmsComponent } from './components/slider-films/slider-films.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { SliderSeriesComponent } from './components/slider-series/slider-series.component';
import { PilotDetailComponent } from './components/pilot-detail/pilot-detail.component';
import { PilotService } from './services/pilot.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavigationBarComponent,
    LoginFormComponent,
    SignUpFormComponent,
    SliderFilmsComponent,
    StarshipDetailComponent,
    StarshipListComponent,
    SliderSeriesComponent,
    PilotDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [StarshipService, PilotService , UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
