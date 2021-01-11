import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { VotarComponent } from './pages/votar/votar.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path : 'inicio', component : InicioComponent},
  { path : 'votar', component : VotarComponent},
  { path : 'registro', component : RegistroComponent},
  { path : '**', pathMatch : 'full', redirectTo : 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
