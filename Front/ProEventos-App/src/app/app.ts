import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Eventos } from "./eventos/eventos";
import { PalestrantesComponent } from "./palestrantes/palestrantes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Eventos, PalestrantesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProEventos-App');
}
