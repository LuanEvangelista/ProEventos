import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TitulosComponent } from '../../shared/Titulos/Titulos.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    NgxSpinnerModule,
    TitulosComponent,
    RouterOutlet,
  ],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss'],
})
export class Eventos implements OnInit {
  ngOnInit(): void {}
}
