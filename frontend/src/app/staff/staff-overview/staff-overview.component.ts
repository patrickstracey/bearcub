import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BaseModalService } from 'src/app/_services/base-modal.service';
import { StaffForms } from './staff-overview.forms';
import { MockNameGeneratorService, StaffData } from 'src/app/_services_mock_data/name-generator.service';


@Component({
  selector: 'app-staff-overview',
  templateUrl: './staff-overview.component.html',
  styleUrls: ['./staff-overview.component.scss']
})
export class StaffOverviewComponent implements OnInit {

  displayedColumns: string[] = ['first_name', 'last_name', 'employment_status' ,'hourly_wage', 'annual_wage', 'hire_date', 'details'];
  dataSource: MatTableDataSource<StaffData>;
  staffForms = StaffForms;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _baseModalService: BaseModalService,
    private _tempDataGeneratorService: MockNameGeneratorService) 
    { 
      const staff = Array.from({length: 7}, (_, k) => this._tempDataGeneratorService.createNewStaffMember());
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(staff);
    }

  ngOnInit() {
    this.dataSource.paginator = this.dataSource.paginator;
    this.dataSource.sort = this.dataSource.sort;
  }

  openNewStaffDialog(){
    this._baseModalService.openBottomSheet(this.staffForms.NEW_STAFF);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
