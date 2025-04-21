import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavItemComponent } from '../side-nav-item/side-nav-item.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, SideNavItemComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @Input() isOpen: boolean = true;

  menuItems = [
    { label: 'CRUD', icon: '📦', route: '/categories' },
  ];
}
