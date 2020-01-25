import { Component, OnInit } from '@angular/core';
import { PlanDataModel } from 'src/app/_models/plan-data.model';
import { ChartProjectionService } from 'src/app/_services/projection-chart.service';


//For building out and assigning payment plans to a family

interface serviceTemplate {
  name: string;
  amount: number;
  period: string;
}

interface Projection {
  owedUpfront: number;
  paidUpfront: number;
  totalOwed: number;
  owedWithInterest: number;
  revenueIncrease: number;
  renvenueIncreasePercentage: number;
  repaymentTimeline: number;
}

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  markupPercentage: number = 65;
  repaymentAmount: number = 350;
  avgUpfrontAmount: number = 200;
  timesUsed: number = 10;
  services : serviceTemplate[] = [
    {name: "5 Day Full-time", amount: 350, period: 'Week'},
    {name: "4 Day Full-time", amount: 300, period: 'Week'},
    {name: "3 Day Full-time", amount: 250, period: 'Week'},
    {name: "2 Day Full-time", amount: 200, period: 'Week'},
    {name: "1 Day Full-time", amount: 150, period: 'Week'}
  ];
  selectedService: serviceTemplate = this.services[0];
//--//
  projection: Projection = {
    owedUpfront: null,
    paidUpfront: null,
    totalOwed: null,
    owedWithInterest: null,
    revenueIncrease: null,
    renvenueIncreasePercentage: null,
    repaymentTimeline: null
  };
  

  constructor(public chartBuilderService: ChartProjectionService) { 
  }
  
  ngOnInit() {

  }

  calculateProjections(){

    this.projection.owedUpfront = this.selectedService.amount * this.timesUsed;
    this.projection.paidUpfront =  this.avgUpfrontAmount * this.timesUsed;
    this.projection.owedWithInterest = (this.projection.owedUpfront - this.projection.paidUpfront) * (1 + (this.markupPercentage/100));
    this.projection.totalOwed = this.projection.paidUpfront + this.projection.owedWithInterest;
    this.projection.revenueIncrease = this.projection.owedWithInterest - (this.projection.owedUpfront - this.projection.paidUpfront);
    this.projection.renvenueIncreasePercentage = (this.projection.revenueIncrease/this.projection.owedUpfront);
    this.projection.repaymentTimeline = Math.ceil(this.projection.owedWithInterest/this.repaymentAmount);

    const chartInputs: PlanDataModel = new PlanDataModel(
    this.timesUsed, 
    this.projection.repaymentTimeline,
    this.selectedService.amount,
    this.avgUpfrontAmount,
    this.repaymentAmount);

    this.chartBuilderService.generateData(chartInputs);
  }

}
