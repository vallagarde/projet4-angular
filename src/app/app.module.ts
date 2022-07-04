import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';


import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';



import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MeteoComponent } from './meteo/meteo.component';
import { RegisterComponent } from './register/register.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';
import { SeanceComponent } from './seance/seance.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PriseComponent } from './prise/prise.component';
import { MapComponent } from './map/map.component';
import { SeancesComponent } from './seances/seances.component';
import { VerificationComponent } from './verification/verification.component';
import { MeteoBoardComponent } from './meteo-board/meteo-board.component';



const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MeteoComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ProfileComponent,
    SeanceComponent,
    PriseComponent,
    MapComponent,
    SeancesComponent,
    VerificationComponent,
    MeteoBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatInputModule,
    MatMomentDateModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatStepperModule,
    MatTableModule,
    GoogleMapsModule,
  ],
  providers: [
    authInterceptorProviders,
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
