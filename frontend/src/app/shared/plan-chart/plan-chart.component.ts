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
    this.data = {};
    this.data.labels = data.chartLabels;
    this.data.series = [data.baselineCostData, data.revenueData]
    this.displayChart = true; 
  }

  type: ChartType = 'Line';
  data: IChartistData = {
    labels: this.chartDisplayData.chartLabels,
    series: [
      this.chartDisplayData.baselineCostData,
      this.chartDisplayData.revenueData
    ]
  };

  options: ILineChartOptions = {
    axisX: {
      showGrid: false
    },
    height: 500,
    showArea: true,
    showPoint: false
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