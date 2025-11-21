import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Titulos',
  templateUrl: './Titulos.component.html',
  styleUrls: ['./Titulos.component.scss'],
})
export class TitulosComponent implements OnInit {
  @Input() titulo: string = '';

  @Input() subtitulo: string = 'Desde 2021';

  @Input() iconClass: string = 'fa fa-user';

  @Input() botaoListar: boolean = false;
  constructor() {}

  ngOnInit() {}
}
