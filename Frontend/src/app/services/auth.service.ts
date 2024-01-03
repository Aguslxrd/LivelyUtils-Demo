import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ILogin } from '../Interfaces/ILogin';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlAuthLogin = 'http://dev-club.duckdns.org:8080/api/auth/authenticate';

  constructor(private http: HttpClient) {
    interval(3600000).subscribe(() => {
      const token = this.getToken();
      if (token && (this.isTokenExpired(token) || this.removeTokenIfIsExpired())) {
        this.removeToken();
      }
    });
  }

  login(credentials: { email: string, passwd: string }): Observable<ILogin> {
    return this.http.post<ILogin>(`${this.apiUrlAuthLogin}`, credentials)
      .pipe(
        catchError((error: any) => {
          console.error('Error en la solicitud de login');
          throw error;
        })
      );
  }

  public getData(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<any>(this.apiUrlAuthLogin, { headers });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  public isTokenExpired(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      const now = Date.now() / 1000;
      return decodedToken.exp < now;
    } catch (error) {
      return true;
    }
  }

  removeTokenIfIsExpired(): boolean {
    const lastTokenCheck = Number(localStorage.getItem('lastTokenCheck')) || 0;
    const now = Date.now();
    const twelveHoursInMillis = 12 * 60 * 60 * 1000;

    return now - lastTokenCheck > twelveHoursInMillis;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && token !== undefined && !this.isTokenExpired(token);
  }

  logout(): void {
    this.removeToken();
  }
}
