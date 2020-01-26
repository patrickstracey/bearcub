import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BaseModalService } from 'src/app/_services/base-modal.service';
import { NewFamilyForms } from './overview.forms';

export interface FamilyData {
  last_name: string;
  first_name: string;
  student_count: number;
  account_status: boolean;
  enrollment_date: Date;
}

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
//Place to search and view all current customers

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['last_name', 'first_name', 'student_count', 'status' ,'enrollment_date', 'details'];
  dataSource: MatTableDataSource<FamilyData>;
  newFamilyForms = NewFamilyForms;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _baseModalService : BaseModalService
  ) {
    const users = Array.from({length: 37}, (_, k) => createNewUser(k + 1));
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

function createNewUser(id: number): FamilyData {
  const first_name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const last_name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const student_count = 1+ Math.round(Math.random()* 1.5);
  const status = true;
  const enrollment = new Date();

  return {
    last_name: first_name,
    first_name: last_name,
    student_count: student_count,
    account_status: status,
    enrollment_date: enrollment
    }
  };
