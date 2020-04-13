import { BaseModalFieldsModel } from "src/app/_models/base-modal-fields.model";


const StudentForm: BaseModalFieldsModel = {
    title: 'New Family Enrollment',
    button_text: 'Enroll',
    fields: [
      {
        name: 'Family',
        input_type: 'text',
        hint:"Select an existing family",
      },
      {
        name: 'Student First Name',
        input_type: 'text',
        hint:'Name of the student being enrolled'
      },
      {
        name: 'Student Last Name',
        input_type: 'text',
        hint:'Surname of the student being enrolled'
      },
      {
        name: 'Student Age',
        input_type: 'number'
      },
      {
        name: 'Student Notes',
        input_type: 'text',
        hint:'Important preliminary information about the student'
      }
    ],

}


export const NewStudentForms ={
    NEW_STUDENT: StudentForm
}