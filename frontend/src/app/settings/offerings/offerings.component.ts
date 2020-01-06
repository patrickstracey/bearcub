import { Component, OnInit } from '@angular/core';

//Essentially for accounting needs. Setup Pre-save Payment Plans, Rates, and Services here
@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent implements OnInit {

  private offerings = [
    {
      name:'5 Full Days [36 months - Pre-K]',
      tuition:'163.00',
      minimum: '145.00'
    },
    {
      name:'5 Half Days [36 months - Pre-K]',
      tuition:'133.00',
      minimum: '105.00'
    },
    {
      name:'4 Full Days [36 months - Pre-K]',
      tuition:'153.00',
      minimum: '135.00'
    },
    {
      name:'4 Half Days [36 months - Pre-K]',
      tuition:'123.00',
      minimum: '115.00'
    },
    {
      name:'3 Full Days [36 months - Pre-K]',
      tuition:'141.00',
      minimum: '120.00'
    },
    {
      name:'3 Half Days [36 months - Pre-K]',
      tuition:'113.00',
      minimum: '98.00'
    },
    {
      name:'2 Full Days [36 months - Pre-K]',
      tuition:'108.00',
      minimum: '85.00'
    },
    {
      name:'2 Half Days [36 months - Pre-K]',
      tuition:'88.00',
      minimum: '78.00'
    },
    {
      name:'Drop-in [36 months - Pre-K]',
      tuition:'75.00',
      minimum: '75.00'
    }
  ];

  constructor() { }

  ngOnInit() {

  }


}
