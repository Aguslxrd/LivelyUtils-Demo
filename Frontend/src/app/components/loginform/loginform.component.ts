import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  credentials = {
    email: '',
    passwd: ''
  };

  constructor(private authService: AuthService, private router: Router, private backendService: AuthService) {}

  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        if (response && response.token) {
          this.authService.setToken(response.token);
          this.router.navigate(['/dashboard']);
        }
      },
      error => {
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
  
  onLoginFormSubmit(email: string, passwd: string): void {
    const credentials = {
      email: email,
      passwd: passwd
    };
    this.authService.login(credentials).subscribe(
      (response: any) => {
        if (response && response.token) {
          this.authService.setToken(response.token);
          this.router.navigate(['/dashboard']);
        }
      },
      error => {
        console.error('Error de inicio de sesión, revisa las credenciales.');
      }
    );
  }
}
