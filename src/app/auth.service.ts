import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Si estás usando HttpClient para hacer peticiones HTTP
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://example.com/api'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Promise<void> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        catchError(error => {
          console.error('Error de inicio de sesión:', error);
          return of(null); // Manejar el error según tu necesidad
        })
      )
      .toPromise()
      .then(response => {
        if (response) {
          // Guardar el token o manejar la respuesta
          localStorage.setItem('token', response.token);
        } else {
          throw new Error('Error de inicio de sesión');
        }
      });
  }
}
