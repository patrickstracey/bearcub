export class PlanDataModel{

    constructor(
        public serviceUseTimeline:number,
        public repaymentTimeline: number,
        public serviceCost: number,
        public avgUpfrontPayment: number,
        public planPayment: number
    ){}
}

export class BuildChartModel{
    constructor(
        public chartLabels: string[],
        public revenueData: number[],
        public baselineCostData: number[]
    ){}
}