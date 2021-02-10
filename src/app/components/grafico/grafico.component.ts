import { Component } from '@angular/core';

import { CovidService } from '../../services/covid.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  chart = [];

  constructor( private covid: CovidService){}

  ngOnInit(){
    this.covid.covidApi().subscribe(res => console.log(res));
  }
}



