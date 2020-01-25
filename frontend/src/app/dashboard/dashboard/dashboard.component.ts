import { Component, OnInit } from '@angular/core';
import { BaseModalService } from 'src/app/_services/base-modal.service';
import { BaseModalFieldsModel } from 'src/app/_models/base-modal-fields.model';
import { DashboardForms } from './dashboard.forms'


//Serves as the home dashboard for all clients

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  today: Date;
  dashboardForms = DashboardForms;
  
  constructor(private modalBuilder: BaseModalService) { }

  ngOnInit() {
    this.today = new Date();
  }

  openDialog(form: BaseModalFieldsModel){
    this.modalBuilder.openBottomSheet(form);
  }

}
