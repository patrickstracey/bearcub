import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BaseModalService } from 'src/app/_services/base-modal.service';
import { ClassroomForms } from './classes.forms';

//a place to build out the classes that exist. May not be needed.
export interface ClassroomData {
  classroom_name: string;
  teachers: string;
  students: string[];
  room: string;
}

const PEOPLE_NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const CLASSROOM_NAMES: string[] = ["Sunshine", "Burrow", "Moonlight", "Redwood", "Kelp", "Spaceship"];


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  displayedColumns: string[] = ['classroom_name', 'teachers', 'student_count', 'room' , 'details'];
  dataSource: MatTableDataSource<ClassroomData>;
  classroomForms = ClassroomForms;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _baseModalService : BaseModalService
  ) {
    let classrooms: ClassroomData[] = new Array();
    CLASSROOM_NAMES.forEach((class_item)=>{classrooms.push(createNewClassroom(class_item))});
    this.dataSource = new MatTableDataSource(classrooms);
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openNewClassroomDialog(){
    this._baseModalService.openBottomSheet(this.classroomForms.NEW_CLASSROOM);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

function createNewClassroom(class_name: string): ClassroomData {
  const classroom_name = class_name;
  const teachers = "Ms." + PEOPLE_NAMES[Math.round(Math.random() * (PEOPLE_NAMES.length - 1))];

  let students: string[] = new Array();
  const student_count = 1+ Math.round(Math.random()* 12);
  for (let i = 0; i <= student_count; i++){
    const student_name = PEOPLE_NAMES[Math.round(Math.random() * (PEOPLE_NAMES.length - 1))] + " " + PEOPLE_NAMES[Math.round(Math.random() * (PEOPLE_NAMES.length - 1))];
    students.push(student_name);
  }

  return {
    classroom_name: classroom_name,
    teachers: teachers,
    students: students,
    room: classroom_name + " Room"
    }
  };
