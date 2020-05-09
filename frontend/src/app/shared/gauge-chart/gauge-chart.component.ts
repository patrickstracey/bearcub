import { Component, Input } from '@angular/core';
import { IPieChartOptions, IChartistAnimationOptions, IChartistData } from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent {

  @Input() displayLabels: string[]; //Setting a seperate labesl array for creating a Key
  @Input() dataSet: number[];

  type: ChartType = 'Pie';
  styleLabels = ['ct-series-a', 'ct-series-b', 'ct-series-c', 'ct-series-d'];

  ngOnInit() {
    this.data.series = this.dataSet;
  }

  data: IChartistData = {
    series: []
  };

  options: IPieChartOptions = {
    donut: true,
    donutWidth: 70,
    startAngle: 270,
    total: 200,
    showLabel: false
  };

  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'pie') {
        data.element.animate({
          y2: <IChartistAnimationOptions>{
            dur: '0.5s',
            from: data.y1,
            to: data.y2,
            easing: 'easeOutQuad'
          }
        });
      }
    }
  };

}
