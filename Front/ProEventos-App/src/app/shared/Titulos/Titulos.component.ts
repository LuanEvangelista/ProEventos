import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Titulos',
  templateUrl: './Titulos.component.html',
  styleUrls: ['./Titulos.component.scss'],
})
export class TitulosComponent implements OnInit {
  @Input() titulo: string = '';

  constructor() {}

  ngOnInit() {}
}
