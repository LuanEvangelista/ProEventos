import { Component, OnInit } from '@angular/core';
import { TitulosComponent } from "../../shared/Titulos/Titulos.component";

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
  imports: [TitulosComponent]
})
export class ContatosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
