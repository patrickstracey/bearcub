import { Component, OnInit } from '@angular/core';


//Information regarding a specific family client

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['./family-detail.component.scss']
})
export class FamilyDetailComponent implements OnInit {

  private students = [
    {
      name: 'Geoff',
      age: 4,
      note: 'Has a peanut allergy'
    },
    {
      name: 'Samantha',
      age: 3,
      note: 'Struggles with reading'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}