import { Component, OnInit } from '@angular/core';
import { TitulosComponent } from '../../../shared/Titulos/Titulos.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  imports: [TitulosComponent],
})
export class PerfilComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
