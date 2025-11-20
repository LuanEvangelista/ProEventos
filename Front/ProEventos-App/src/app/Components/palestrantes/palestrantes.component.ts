import { Component, OnInit } from '@angular/core';
import { TitulosComponent } from '../../shared/Titulos/Titulos.component';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.scss'],
  imports: [TitulosComponent],
})
export class PalestrantesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
