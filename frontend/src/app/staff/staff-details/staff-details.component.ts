import { Component, OnInit } from '@angular/core';
import { PhotoMocksService } from 'src/app/_services_mock_data/photo-mocks.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.scss']
})
export class StaffDetailsComponent implements OnInit {

  photos: string[];

  constructor(
    private _mockPhotoService: PhotoMocksService
  ) { }

  ngOnInit() {
    this.photos = this._mockPhotoService.getPhotos('teacher');
  }

}
