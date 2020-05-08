import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { PhotoMocksService } from 'src/app/_services_mock_data/photo-mocks.service';
import { MockNameGeneratorService, StudentData } from 'src/app/_services_mock_data/name-generator.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {

  displayedStudentColumns: string[] = ['name', 'notes', 'birthday', 'status'];
  dataSource: MatTableDataSource<StudentData>;
  photos: string[];

  constructor(
    private _mockPhotoService: PhotoMocksService,
    private _mockDataService: MockNameGeneratorService
  ) {
    const users = Array.from({length: 14}, (_, k) => this._mockDataService.createNewStudent(k + 1));
    console.log(users);
    this.dataSource = new MatTableDataSource(users);
   }

  ngOnInit() {
    this.photos = this._mockPhotoService.getPhotos('all');
  }

}
