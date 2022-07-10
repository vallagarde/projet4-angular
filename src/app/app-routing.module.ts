import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeteoPreferenceComponent } from './meteo-preference/meteo-preference.component';
import { MeteoComponent } from './meteo/meteo.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SeanceComponent } from './seance/seance.component';
import { VerificationComponent } from './verification/verification.component';
import { AuthguardGuard } from './_services/authguard.guard';
import { LoginGuard } from './_services/login.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'meteo', component: MeteoComponent},
  {path: 'login',canActivate:[LoginGuard], component: LoginComponent},
  { path: 'register',canActivate:[LoginGuard], component: RegisterComponent },
  { path: 'profile',canActivate:[AuthguardGuard], component: ProfileComponent },
  { path: 'user',canActivate:[AuthguardGuard], component: BoardUserComponent },
  { path: 'mod',canActivate:[AuthguardGuard], component: BoardModeratorComponent },
  { path: 'admin',canActivate:[AuthguardGuard], component: BoardAdminComponent },
  { path: 'seance', canActivate:[AuthguardGuard], component: SeanceComponent },
  { path: 'verify', component: VerificationComponent },
  { path: 'preference',canActivate:[AuthguardGuard] , component : MeteoPreferenceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
