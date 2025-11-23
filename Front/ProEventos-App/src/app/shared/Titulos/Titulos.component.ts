import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  ngOnInit() {}

  listar(): void {
    this.router.navigate([`/${this.titulo.toLocaleLowerCase()}/lista`]);
  }
}
