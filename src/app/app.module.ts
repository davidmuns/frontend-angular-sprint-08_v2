// SERVICES
import { UserService } from 'src/app/services/user.service';
import { PilotService } from './services/pilot.service';
import { StarshipService } from './services/starship.service';

// ANGULAR
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// NG-BOOTSTRAP
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// COMPONENTS
import { AppComponent } from './app.component';
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

// EXTERNAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmailPasswordComponent } from './components/email-password/email-password.component';


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
    EmailPasswordComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [StarshipService, PilotService , UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
