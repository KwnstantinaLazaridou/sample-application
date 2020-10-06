import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mapIsVisible = true;
  calendarIsVisible = true;
  customerIsVisible = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogout(event: Event) {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleVisibility(componentName: string) {
    switch (componentName) {
      case 'map':
        this.mapIsVisible = !this.mapIsVisible;
        break;
      case 'calendar':
        this.calendarIsVisible = !this.calendarIsVisible;
        break;
      case 'customer':
        this.customerIsVisible = !this.customerIsVisible;
        break;
    }

    return false;
  }
}
