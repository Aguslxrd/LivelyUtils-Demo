import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AdminsidebarComponent } from './components/adminsidebar/adminsidebar.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { ConfessionComponent } from './components/confession/confession.component';
import { MaincardComponent } from './components/maincard/maincard.component';
import { PricesComponent } from './components/prices/prices.component';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactionsComponent } from './components/reactions/reactions.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    AdminsidebarComponent,
    LoginformComponent,
    ConfessionComponent,
    MaincardComponent,
    PricesComponent,
    ReactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
