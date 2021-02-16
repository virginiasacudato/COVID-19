import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';



import { CovidService } from './services/covid.service';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VotarComponent } from './pages/votar/votar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VotarComponent,
    NavbarComponent,
    GraficoComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
