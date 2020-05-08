import { Component, OnInit } from '@angular/core';

import { PhotoMocksService } from 'src/app/_services_mock_data/photo-mocks.service';
import { MockNameGeneratorService, StudentData } from 'src/app/_services_mock_data/name-generator.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss'],
})
export class ClassDetailComponent implements OnInit {

  displayedStudentColumns: string[] = ['name', 'birthday', 'status'];
  photos: string[];
  users: StudentData[];

  constructor(
    private _mockPhotoService: PhotoMocksService,
    private _mockDataService: MockNameGeneratorService
  ) {
    this.users = Array.from({length: 14}, (_, k) => this._mockDataService.createNewStudent(k + 1));
    console.log(this.users);
   }

  ngOnInit() {
    this.photos = this._mockPhotoService.getPhotos('all');
  }

}
