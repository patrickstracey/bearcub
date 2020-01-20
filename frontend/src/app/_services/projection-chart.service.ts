import { PlanDataModel, BuildChartModel } from '../_models/plan-data.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({providedIn:'root'})
export class ChartProjectionService{

    passedData: PlanDataModel;
    buildReadyData: BuildChartModel = new BuildChartModel([],[],[]);
    totalTimeline: number;

    projectionDataBuilt= new Subject<BuildChartModel>();

    constructor(){
    }

    generateData(passedData: PlanDataModel){
        this.totalTimeline = passedData.serviceUseTimeline + passedData.repaymentTimeline;
        this.buildReadyData.chartLabels = this.timelineLabels(passedData.serviceUseTimeline);
        this.buildReadyData.revenueData = this.payments(passedData.avgUpfrontPayment, passedData.planPayment, passedData.serviceUseTimeline);
        this.buildReadyData.baselineCostData = this.baselineRevenue(passedData.serviceCost, passedData.serviceUseTimeline);

        this.emitBuildData();
    }

    

    emitBuildData() {
        this.projectionDataBuilt.next(this.buildReadyData);
        console.log("emitting");
        console.log(this.buildReadyData);
    }

    private timelineLabels(enrollmentLength: number){
        let returnedLabels: string[] = [];
        let lblCount: number;
        for (lblCount = 0; lblCount < this.totalTimeline; lblCount++) {
            if (lblCount < enrollmentLength){
                returnedLabels.push('Active');
            }
            else{
                returnedLabels.push('Plan');
            }
        }
        return returnedLabels;
    }

    private payments(avgPayment: number, planPayment: number, enrollmentLength: number){
        let revenue: number[] = [];
        let previousPayment: number = 0;
        let payment: number;

        for(payment = 0; payment < this.totalTimeline; payment++ ){
            if (payment < enrollmentLength){
                revenue.push(previousPayment += avgPayment);
            }
            else{
                revenue.push(previousPayment += planPayment);
            }
        }
        return revenue;
    }

    private baselineRevenue(tuition: number, enrollmentLength: number){
        let baseRevenue: number[] = [];
        let previousPayment: number = 0;
        let payment: number;

        for(payment = 0; payment < this.totalTimeline; payment++ ){
            if (payment < enrollmentLength){
                baseRevenue.push(previousPayment += tuition) 
            }
            else{
                baseRevenue.push(previousPayment)
            }
        }
        return baseRevenue;
    }



}