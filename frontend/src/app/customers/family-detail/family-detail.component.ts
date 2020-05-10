import { Component, OnInit } from '@angular/core';
import { BaseModalService } from 'src/app/_services/base-modal.service';
import { BaseModalFieldsModel } from 'src/app/_models/base-modal-fields.model';
import { FamilyDetailForms } from './family-detail.forms'


//Information regarding a specific family client

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['./family-detail.component.scss']
})
export class FamilyDetailComponent implements OnInit {

  familyForms = FamilyDetailForms;
  students = [
    {
      name: 'Geoff',
      age: 4,
      status: 'Graduated',
      note: 'Has a peanut allergy'
    },
    {
      name: 'Samantha',
      age: 3,
      status: 'Enrolled',
      note: 'Struggles with reading'
    },
  ]

  activities = [
    {
      event: "Samantha 1st enrollment",
      date: new Date()
    },
    {
      event: "Samantha Checked-in for class",
      date: new Date()
    },
    {
      event: "Samantha enrolled in 5-Day Full Time",
      date: new Date()
    },
    {
      event: "Upfront Balance Paid - $300.00",
      date: new Date()
    },
    {
      event: "Plan Payment Processed - $284.00",
      date: new Date()
    },
    {
      event: "Samantha Checked-in for class",
      date: new Date()
    }
  ]

  constructor(private _formModalService: BaseModalService ) { }

  ngOnInit() {
  }

  openDialog(form: BaseModalFieldsModel){
    this._formModalService.openBottomSheet(form);
  }



}
