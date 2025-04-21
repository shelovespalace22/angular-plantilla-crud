import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav-item.component.html',
  styleUrl: './side-nav-item.component.css'
})
export class SideNavItemComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() route: string = '';
}
