import { Component, OnInit } from '@angular/core';


//serves as where clients can upload their logo, and set their colors



@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  DAYS: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday', 'Sunday'];
  PLANS: string [] = ['Monday', 'Tuesday', 'Wednesday'];

  constructor() { }

  ngOnInit() {
    
  }

}
