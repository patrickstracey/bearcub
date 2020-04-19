import { Injectable } from '@angular/core';

export interface NameInterface{
    first: string;
    last: string;
}

export interface FamilyData {
    last_name: string;
    first_name: string;
    student_count: number;
    account_status: boolean;
    enrollment_date: Date;
  }

export interface StaffData {
  last_name: string;
  first_name: string;
  employment_status: string;
  hourly_wage: number;
  annual_wage: number;
  hire_date: Date;
}

const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
  ];

@Injectable({providedIn: 'root'})
export class MockNameGeneratorService {

    generateName(){
        const first_name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
        const last_name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];

        return {
            first: first_name,
            last: last_name
        }
    }

    createNewFamily() {
      const name : NameInterface = this.generateName();
      const student_count = 1+ Math.round(Math.random()* 1.5);
      const status = true;
      const enrollment = new Date();
    
      return {
        last_name: name.last,
        first_name: name.first,
        student_count: student_count,
        account_status: status,
        enrollment_date: enrollment
      }
    }

    createNewStaffMember() {
      const name : NameInterface = this.generateName();
      const wage = 8 + Math.floor(Math.random() * Math.floor(20))
      const hired = new Date('2/26/2018');
    
      return {
        last_name: name.last,
        first_name: name.first,
        employment_status: "Active",
        hourly_wage: wage,
        annual_wage: wage * 40 * 52,
        hire_date: hired
      }
    }


}