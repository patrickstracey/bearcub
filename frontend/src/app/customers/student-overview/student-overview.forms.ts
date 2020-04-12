import { BaseModalFieldsModel } from "src/app/_models/base-modal-fields.model";


const StudentForm: BaseModalFieldsModel = {
    title: 'New Family Enrollment',
    button_text: 'Enroll',
    fields: [
      {
        name: 'Family Last Name',
        input_type: 'text',
        hint:"Last name of the student's family",
      },
      {
        name: 'Parent First Name',
        input_type: 'text',
        hint:'Name of the parent enrolling the student(s)'
      },
      {
        name: 'Payment Credit Card Number',
        input_type: 'text',
        placeholder: "**** **** **** ****"
      },
      {
        name: 'Student Name',
        input_type: 'text',
        hint:'Name of the student being enrolled'
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