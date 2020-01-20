import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILineChartOptions, IChartistAnimationOptions, IChartistData } from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { BuildChartModel } from 'src/app/_models/plan-data.model';
import { ChartProjectionService } from 'src/app/_services/projection-chart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-plan-chart',
  templateUrl: './plan-chart.component.html',
  styleUrls: ['./plan-chart.component.scss']
})
export class PlanChartComponent implements OnInit, OnDestroy {

  chartDisplayData: BuildChartModel = new BuildChartModel([],[],[]);
  displayChart: boolean = false;

  private projectionListener$: Subscription;
  
  constructor(public chartBuilderService: ChartProjectionService){
  }

  ngOnInit(){
    this.subscribeToChartData();
  }

  ngOnDestroy(){
    this.projectionListener$.unsubscribe();
  }

  subscribeToChartData(){
    this.projectionListener$ = this.chartBuilderService.projectionDataBuilt.subscribe(
      (chartData) => {
      this.buildChart(chartData);
    });
  }

  buildChart(data: BuildChartModel){
    console.log("I heard it!");
    this.chartDisplayData = data;
    this.chartDisplayData.chartLabels.length == 0 ? this.displayChart = false : this.displayChart = true;
  }

  type: ChartType = 'Line';
  data: IChartistData = {
    labels: this.chartDisplayData.chartLabels,
    /* [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ] ,*/
    series: [
      this.chartDisplayData.baselineCostData,
      this.chartDisplayData.revenueData
      /* [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4] */
    ]
  };

  options: ILineChartOptions = {
    axisX: {
      showGrid: false
    },
    height: 500
  };

  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'line') {
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

class LineChart{

}