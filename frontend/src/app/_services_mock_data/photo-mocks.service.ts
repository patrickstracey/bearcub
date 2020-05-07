import { Injectable } from '@angular/core';


const studentPath: string = '../../../assets/mock-photos/students/';
const teacherPath: string = '../../../assets/mock-photos/teachers/';
const studentFiles: string[] = ['student_1.webp'];
const teacherFiles: string[] = ['student_1.webp'];

@Injectable({providedIn: 'root'})
export class PhotoMocksService {

  constructor() { }

  getPhotos(group:string){
    let files: string[] = []; 
    switch(group){
      case 'student':
        return this.compilePhotos(studentPath, studentFiles);
      case 'teacher':
        return this.compilePhotos(teacherPath, teacherFiles); 
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
