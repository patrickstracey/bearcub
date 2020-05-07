import { Component, OnInit } from '@angular/core';
import { PhotoMocksService } from 'src/app/_services_mock_data/photo-mocks.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {

  photos: string[];

  constructor(
    private _mockPhotoService: PhotoMocksService
  ) { }

  ngOnInit() {
    this.photos = this._mockPhotoService.getPhotos('all');
  }

}
