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

export interface StudentData {
  last_name: string;
  first_name: string;
  classroom: string;
  dob: Date;
}

export interface StaffData {
  last_name: string;
  first_name: string;
  employment_status: string;
  hourly_wage: number;
  annual_wage: number;
  hire_date: Date;
}

export interface RoomData {
  classroom_name: string;
  square_footage: number;
  building_name: string;
}

export interface CheckinData {
  student_name: string;
  checkin_submitter: string;
  checkin_type: string;
  service_type: string;
  scheduled_on: Date;
  status: boolean;
  payment: string;
}

const CLASSROOM_NAMES: string[] = ["Sunshine", "Burrow", "Moonlight", "Redwood", "Kelp", "Spaceship"];

const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth', 'Mary', 'Elton',
    'Derrick', 'Quincey', 'Sharon', 'Kevin', 'Kim', 'Lee', 'Valerie', 'Kinsey', 'MacKenzie', 'Zeta'
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

    generateInt(floor: number, max: number): number{
      return floor + (Math.floor(Math.random() * Math.floor(max)));
    }

    createNewFamily(): FamilyData {
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

    createNewStaffMember(): StaffData {
      const name : NameInterface = this.generateName();
      const wage = this.generateInt(8, 20)
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

    createNewStudent(id: number): StudentData {
      const first_name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
      const last_name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
      const dob = new Date('10/15/2016');
    
      return {
        last_name: first_name,
        first_name: last_name,
        classroom: "Sunshine",
        dob: dob
        }
      };

    createNewRooms(): RoomData[] {

      let classrooms : RoomData[] = [];

      CLASSROOM_NAMES.forEach((classroom_name)=>{
        const new_room : RoomData = {
          classroom_name: classroom_name,
          building_name: "Building A",
          square_footage: this.generateInt(750, 2100),
        }
        classrooms.push(new_room);
        })
        
        return classrooms;
      };
    
    createCheckin(): CheckinData{
      const s_name = this.generateName();
      const p_name = this.generateName();
      let c_type = "Drop-In"
      let s_type = "Full Day"
      const today = new Date();
      let scheduled = null;
      let status: boolean = true;
      let pment = 'Paid at Check-in'

      if (this.generateInt(0, 2)  == 1){
        status = false
      }
      if (this.generateInt(0, 4)  == 3){
        s_type = "Half Day"
      }
      if (this.generateInt(0, 2)  == 1){
        scheduled = new Date()
        scheduled.setDate(today.getDate() - this.generateInt(1,6));
        scheduled.toDateString();
        c_type = "Scheduled Online"
        pment = "Pre-paid Online"

      }

      const checkin =  {
        student_name: s_name.first + " " + s_name.last,
        checkin_submitter: p_name.first + " " + s_name.last,
        checkin_type: c_type,
        service_type: s_type,
        scheduled_on: scheduled,
        status: status,
        payment: pment
      }

      return checkin;

    }

}