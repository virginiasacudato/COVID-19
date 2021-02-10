import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { CovidService } from './services/covid.service';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VotarComponent } from './pages/votar/votar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraficoComponent } from './components/grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VotarComponent,
    NavbarComponent,
    GraficoComponent
  ],
  exports: [
    NavbarComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
