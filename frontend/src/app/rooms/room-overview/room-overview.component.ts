import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BaseModalService } from 'src/app/_services/base-modal.service';
import { RoomForms } from './room.forms';
import { MockNameGeneratorService, RoomData } from 'src/app/_services_mock_data/name-generator.service';

//a place to build out the classes that exist. May not be needed.

@Component({
  selector: 'app-room-overview',
  templateUrl: './room-overview.component.html',
  styleUrls: ['./room-overview.component.scss']
})
export class RoomOverviewComponent implements OnInit {
  displayedColumns: string[] = ['classroom_name', 'building_name', 'square_footage','details'];
  dataSource: MatTableDataSource<RoomData>;
  roomForms = RoomForms;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _baseModalService: BaseModalService,
    private _mockDataService: MockNameGeneratorService
  ) {
    const classrooms: RoomData[] = this._mockDataService.createNewRooms()
    this.dataSource = new MatTableDataSource(classrooms);
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openNewRoomDialog(){
    this._baseModalService.openBottomSheet(this.roomForms.NEW_ROOM);
  }
 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
