// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component'; // Import MainContentComponent
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MainContentComponent,  // Add MainContentComponent to imports
    NavbarComponent,        // Add NavbarComponent to imports
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to 'styleUrls' (it was 'styleUrl' before)
})
export class AppComponent {
  title = 'angular-spa';
}

