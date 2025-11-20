import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, CollapseDirective, BsDropdownModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isCollapsed = true;
}