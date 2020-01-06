import { Component, OnInit } from '@angular/core';


//Serves as the home dashboard for all clients

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent implements OnInit {
  today: Date;
  
  constructor() { }

  ngOnInit() {
    this.today = new Date();
    console.log(this.today);
  }

}
