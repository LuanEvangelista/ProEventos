import { Routes } from '@angular/router';
import { Eventos } from './Components/eventos/eventos';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PalestrantesComponent } from './Components/palestrantes/palestrantes.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { ContatosComponent } from './Components/contatos/contatos.component';

export const routes: Routes = [
  { path: 'eventos', component: Eventos },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'palestrantes', component: PalestrantesComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
