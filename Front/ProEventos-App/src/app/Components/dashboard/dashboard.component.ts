import { Component, OnInit } from '@angular/core';
import { TitulosComponent } from "../../shared/Titulos/Titulos.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [TitulosComponent],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
