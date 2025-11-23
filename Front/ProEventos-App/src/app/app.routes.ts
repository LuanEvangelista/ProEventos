import { Routes } from '@angular/router';
import { Eventos } from './Components/eventos/eventos';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PalestrantesComponent } from './Components/palestrantes/palestrantes.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { EventoDetalhe } from './Components/eventos/evento-detalhe/evento-detalhe';
import { EventoLista } from './Components/eventos/evento-lista/evento-lista';

export const routes: Routes = [
  { path: 'eventos', redirectTo: 'eventos/lista', pathMatch: 'full' },
  {
    path: 'eventos',
    component: Eventos,
    children: [
      { path: 'detalhe/:id', component: EventoDetalhe },
      { path: 'detalhe', component: EventoDetalhe },
      { path: 'lista', component: EventoLista },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'palestrantes', component: PalestrantesComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
