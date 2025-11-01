import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseDirective } from 'ngx-bootstrap/collapse';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, CollapseDirective],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isCollapsed = true;
}