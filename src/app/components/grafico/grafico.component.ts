import { Component } from '@angular/core';

import { CovidService } from '../../services/covid.service';
import { Chart } from 'chart.js';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
chart = [];

  constructor( private covid: CovidService){}

  ngOnInit(){
    this.covid.covidApi().subscribe(res => {
      /*const result = res.location.timelines;
      const {deaths, confirmed, recovered} = result;*/
      const muertes = res.location.timelines.deaths.timeline;
      const recuperados = res.location.timelines.recovered.timeline;
      const confirmados = res.location.timelines.confirmed.timeline;
      console.log(muertes);

  // Configuración de grafico
  this.chart = new Chart ('canvas', {
        type: 'line',
        data: {
          labels: Object.keys(muertes),
          datasets : [
          {
            label: 'Muertes',
            data: Object.values(muertes),
            fill: false,
            backgroundColor: 'red',
          },
          {
            label: 'Recuperados',
            data: Object.values(recuperados),
            fill: false,
            backgroundColor: 'green',
          },
          {
            label: 'Confirmados',
            data: Object.values(confirmados),
            fill: false,
            backgroundColor: 'yellow',
          }
          ] 
        },
        options:{
          legend: {
            display: true,
            labels: {fontColor: 'white'}
          },
          
          scales: {
            xAxes:[{
              display: false
            }],
            yAxes:[{
              display: true
            }]
          }
        }
      }) 
      });

  }
}

