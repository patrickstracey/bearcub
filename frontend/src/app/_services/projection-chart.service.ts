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
    }

    private timelineLabels(enrollmentLength: number){
        let returnedLabels: string[] = [];
        let lblCount: number;
        let timeIntervals: number = 5;

        if(this.totalTimeline > 10000){
            timeIntervals = 1000;
        }
        else if(this.totalTimeline > 1000){
            timeIntervals = 100;
        }
        else if(this.totalTimeline > 100){
            timeIntervals = 10;
        }



        for (lblCount = 0; lblCount < this.totalTimeline;) {
            if (lblCount < enrollmentLength){
                returnedLabels.push('*');
                enrollmentLength - lblCount >= 4 ? lblCount +=4 : lblCount += (enrollmentLength - lblCount);
            }
            else{
                let monthCount = (this.totalTimeline - lblCount);
                if (monthCount % timeIntervals == 0){
                    returnedLabels.push(monthCount.toString());
                }
                else{
                    returnedLabels.push("");
                }
                
                lblCount ++;
            }
        }
        return returnedLabels;
    }

    private payments(avgPayment: number, planPayment: number, enrollmentLength: number){
        let revenue: number[] = [];
        let previousPayment: number = 0;
        let payment: number;

        for(payment = 0; payment < this.totalTimeline;){
            if (payment < enrollmentLength){
                if ((enrollmentLength - payment)>= 4){
                    revenue.push(previousPayment += (avgPayment*4));
                }
                else{
                    revenue.push(previousPayment += (avgPayment* (enrollmentLength - payment)));
                }
                enrollmentLength - payment >= 4 ? payment +=4 : payment += (enrollmentLength - payment);
            }
            else{
                //this will overpay on plans that arent evenly spread out
                revenue.push(previousPayment += planPayment);
                payment ++;
            }
        }
        return revenue;
    }

    private baselineRevenue(tuition: number, enrollmentLength: number){
        let baseRevenue: number[] = [];
        let previousPayment: number = 0;
        let payment: number;

        for(payment = 0; payment < this.totalTimeline;){
            if (payment < enrollmentLength){
                if ((enrollmentLength - payment)>= 4){
                    baseRevenue.push(previousPayment += (tuition*4));
                }
                else{
                    baseRevenue.push(previousPayment += (tuition* (enrollmentLength-payment)));
                }
                enrollmentLength - payment >= 4 ? payment +=4 : payment += (enrollmentLength - payment);
            }
            else{
                baseRevenue.push(previousPayment)
                payment ++;
            }
        }
        return baseRevenue;
    }



}