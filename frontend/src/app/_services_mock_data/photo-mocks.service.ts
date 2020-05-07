import { Injectable } from '@angular/core';


const studentPath: string = '../../../assets/mock-photos/students/';
const teacherPath: string = '../../../assets/mock-photos/teachers/';
const studentFiles: string[] = ['student_1.webp', 'student_2.jpg', 'student_3.jpg', 'student_4.jpg', 'student_5.jpg', 'student_6.jpg',];
const teacherFiles: string[] = ['teacher_1.jpg'];

@Injectable({providedIn: 'root'})
export class PhotoMocksService {

  constructor() { }

  getPhotos(group: 'student' | 'teacher' | 'all'){
    switch(group){
      case 'student':
        return this.compilePhotos(studentPath, studentFiles);
      case 'teacher':
        return this.compilePhotos(teacherPath, teacherFiles); 
      case 'all':
        let comboList: string[] = [];
        this.compilePhotos(studentPath, studentFiles).forEach(photo=>{
          comboList.push(photo);
        });
        this.compilePhotos(teacherPath, teacherFiles).forEach(photo=>{
          comboList.splice(2, 0, photo);
        });
        return comboList;

    }
  }

  private compilePhotos(path:string, file_list:string[]){
    let photos: string[] = [];
    file_list.forEach(filename=>{
      let photo = path + filename;
      photos.push(photo)
    });
    return photos;
  }

}
