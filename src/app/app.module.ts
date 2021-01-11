import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VotarComponent } from './pages/votar/votar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraficoComponent } from './components/grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VotarComponent,
    RegistroComponent,
    NavbarComponent,
    GraficoComponent
  ],
  exports: [
    NavbarComponent,
    GraficoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
