import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environment/environment';
import { tyApiResponseUserData } from '../../user-data.model';


@Component({
  selector: 'app-tylogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tylogin.component.html',
  styleUrl: './tylogin.component.css'
})
export class TyloginComponent {
  private apiUrl = environment.apiUrl;
  username: string = '';
  password: string = '';
  errorMessage: string = ' ';

  constructor(private router: Router, private http: HttpClient) { }

  login() {
    this.errorMessage = ' ';
    const payload = { account_name: this.username, password: this.password };

    this.http.post<tyApiResponseUserData>(`${this.apiUrl}/account/login/verify-password`, payload).subscribe({
      next: (response: tyApiResponseUserData) => {
        if (response.success) {
          localStorage.setItem('user', JSON.stringify(response.data));
          this.router.navigate(['tywebapp/menu']);
        } else {
          this.errorMessage = response.message;
        }
      },
      error: (error) => {
        this.errorMessage = "Failed to login, either username or password is incorrect.";
      }
    });
  }

  clear() {
    this.username = '';
    this.password = '';
    this.errorMessage = ' ';
  }
}
