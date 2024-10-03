import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // Inject the Router
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle the login logic, e.g., authenticate with a server, etc.
      console.log('Login successful:', this.loginForm.value);

      // Redirect to the main page after successful login
      this.router.navigate(['/']); // Redirect to the main page (or any other route)
    } else {
      console.log('Form is invalid');
    }
  }

  handleForgotPassword(): void {
    // Handle forgot password logic
    console.log('Forgot Password clicked');
  }
}
