import { Component, OnInit } from '@angular/core';
import { PhotoMocksService } from 'src/app/_services_mock_data/photo-mocks.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  private activities = [
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
    }];

    photos: string[];

  constructor(
    private _mockPhotoServie: PhotoMocksService
  ) {}

  ngOnInit() {
    this.photos = this._mockPhotoServie.getPhotos('student');
  }

}
