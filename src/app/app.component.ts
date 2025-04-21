import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../app/components/layout/top-nav/top-nav.component';
import { SideNavComponent } from '../app/components/layout/side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TopNavComponent, SideNavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plantilla-crud';

  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
