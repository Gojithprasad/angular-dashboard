import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

 
  email: string = '';
  password: string = '';

 
  showPassword: boolean = false;
  rememberMe: boolean = false;

  constructor(private router: Router) {}

 
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }


  login(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

    this.router.navigate(['/dashboard']);
  }
}
