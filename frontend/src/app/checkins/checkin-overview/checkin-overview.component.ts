import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MockNameGeneratorService, CheckinData } from 'src/app/_services_mock_data/name-generator.service';

@Component({
  selector: 'app-checkin-overview',
  templateUrl: './checkin-overview.component.html',
  styleUrls: ['./checkin-overview.component.scss']
})
export class CheckinOverviewComponent implements OnInit {

  displayedColumns: string[] = ['status', 'student_name', 'checkin_submitter', 'service_type', 'checkin_type', 'scheduled_on', 'payment'];
  dataSource: MatTableDataSource<CheckinData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _mockDataService: MockNameGeneratorService
  ) 
  { 
    let checkins: CheckinData[] = Array.from({length: 14}, (_, k) => this._mockDataService.createCheckin());
    this.dataSource = new MatTableDataSource(checkins);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
