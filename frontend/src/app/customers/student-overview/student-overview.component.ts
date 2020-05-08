import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BaseModalService } from 'src/app/_services/base-modal.service';
import { NewStudentForms } from './student-overview.forms';
import { MockNameGeneratorService, StudentData } from 'src/app/_services_mock_data/name-generator.service';

//Place to search and view all current customers

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.scss']
})
export class StudentOverviewComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'classroom', 'birthday', 'details'];
  dataSource: MatTableDataSource<StudentData>;
  newStudentForms = NewStudentForms;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _baseModalService : BaseModalService,
    private _mockGeneratorService: MockNameGeneratorService
  ) {
    const users = Array.from({length: 58}, (_, k) => this._mockGeneratorService.createNewStudent(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openNewFamilyDialog(){
    this._baseModalService.openBottomSheet(this.newStudentForms.NEW_STUDENT);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}