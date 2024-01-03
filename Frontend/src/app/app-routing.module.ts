import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouteGuardServiceService } from './services/route-guard-service.service';
import { AlreadyLoggedInGuardService } from './services/already-logged-in-guard.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [AlreadyLoggedInGuardService]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardServiceService]},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
