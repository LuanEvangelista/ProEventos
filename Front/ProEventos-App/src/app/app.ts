import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Eventos } from './eventos/eventos';
import { NavComponent } from './nav/nav.component';
import { EventoService } from '../services/evento.service';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, Eventos, NavComponent],
  providers: [EventoService, BsModalService],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  protected readonly title = signal('ProEventos-App');
}
