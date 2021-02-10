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
    this.covid.covidApi().subscribe(res => {
      /*const result = res.location.timelines;
      const {deaths, confirmed, recovered} = result;*/
      const muertes = res.location.timelines.deaths.timeline;
      console.log(muertes);

      this.chart = new Chart ('canvas', {
        type: 'bar',
        data: {
          datasets : {
            labels: Object.keys(muertes),
            data: muertes,
            backgroundColor: 'red',
            fill: false
          },
        },
        options:{
          legend: {
            display: false
          },
          scales: {
            xAxes:[{
              display: true
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



