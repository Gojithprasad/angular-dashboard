import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {

  constructor(private router: Router) {}

  logout(): void {
    // UI-only logout → redirect to login
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}

