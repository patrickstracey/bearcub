import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BaseModalService } from 'src/app/_services/base-modal.service';
import { NewFamilyForms } from './family-overview.forms';
import { MockNameGeneratorService, FamilyData } from 'src/app/_services_mock_data/name-generator.service';

//Place to search and view all current customers

@Component({
  selector: 'app-family-overview',
  templateUrl: './family-overview.component.html',
  styleUrls: ['./family-overview.component.scss']
})
export class FamilyOverviewComponent implements OnInit {
  displayedColumns: string[] = ['last_name', 'first_name', 'student_count', 'status' ,'enrollment_date', 'details'];
  dataSource: MatTableDataSource<FamilyData>;
  newFamilyForms = NewFamilyForms;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _baseModalService : BaseModalService,
    private _tempNameGenerator: MockNameGeneratorService

  ) {
    const users = Array.from({length: 37}, (_, k) => this._tempNameGenerator.createNewFamily());
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openNewFamilyDialog(){
    this._baseModalService.openBottomSheet(this.newFamilyForms.NEW_FAMILY);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

