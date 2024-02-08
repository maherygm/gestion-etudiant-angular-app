import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-dashboard',
  templateUrl: './navigation-dashboard.component.html',
  styleUrl: './navigation-dashboard.component.scss',
})
export class NavigationDashboardComponent {
  mode: string = 'sombre';
  handleClick() {
    const body = document.querySelector('body');
    body?.classList.toggle('darkTheme');
    if (this.mode === 'sombre') {
      this.mode = 'ligth';
    } else {
      this.mode = 'sombre';
    }
  }
}
