import { Component, OnInit } from '@angular/core';


//For building out and assigning payment plans to a family

interface serviceTemplate {
  name: string;
  amount: number;
}

interface Projection {
  owedUpfront: number;
  paidUpfront: number;
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
  repaymentAmount: number = 150;
  avgUpfrontAmount: number = 200;
  timesUsed: number = 10;
  services : serviceTemplate[] = [
    {name: "5 Day Full-time", amount: 350},
    {name: "4 Day Full-time", amount: 300},
    {name: "3 Day Full-time", amount: 250},
    {name: "2 Day Full-time", amount: 200},
    {name: "1 Day Full-time", amount: 150}
  ];
  selectedService: serviceTemplate = this.services[0];
//--//
  projection: Projection = {
    owedUpfront: null,
    paidUpfront: null,
    owedWithInterest: null,
    revenueIncrease: null,
    renvenueIncreasePercentage: null,
    repaymentTimeline: null
  };
  

  constructor() { 
  }
  
  ngOnInit() {
  }

  calculateProjections(){

    this.projection.owedUpfront = this.selectedService.amount * this.timesUsed;
    this.projection.paidUpfront =  this.avgUpfrontAmount * this.timesUsed;
    this.projection.owedWithInterest = (this.projection.owedUpfront - this.projection.paidUpfront) * (1 + (this.markupPercentage/100));
    this.projection.revenueIncrease = this.projection.owedWithInterest - (this.projection.owedUpfront - this.projection.paidUpfront);
    this.projection.renvenueIncreasePercentage = (this.projection.revenueIncrease/this.projection.owedUpfront);
    this.projection.repaymentTimeline = this.projection.owedWithInterest/this.repaymentAmount;

    console.log(this.projection);
  }

}
