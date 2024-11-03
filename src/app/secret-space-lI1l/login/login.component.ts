import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  bCreateAccount = true;
  bForgetEmail = true;

  clickForgetEmail() {
    alert('Forget Email function is not available.');
    this.bForgetEmail = false;
  }
  clickCreateAccount() {
    alert('Create Account function is not available.');
    this.bCreateAccount = false;
  }

}
