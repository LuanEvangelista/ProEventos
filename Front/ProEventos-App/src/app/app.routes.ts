import { Routes } from '@angular/router';
import { Eventos } from './Components/eventos/eventos';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PalestrantesComponent } from './Components/palestrantes/palestrantes.component';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { EventoDetalhe } from './Components/eventos/evento-detalhe/evento-detalhe';
import { EventoLista } from './Components/eventos/evento-lista/evento-lista';
import { User } from './Components/user/user';
import { Login } from './Components/user/login/login';
import { Registration } from './Components/user/registration/registration';
import { PerfilComponent } from './Components/user/perfil/perfil.component';

export const routes: Routes = [
  {
    path: 'user',
    component: User,
    children: [
      { path: 'login', component: Login },
      { path: 'registration', component: Registration },
    ],
  },

  { path: 'user/perfil', component: PerfilComponent },
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
  { path: 'contatos', component: ContatosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
