import { BaseModalFieldsModel } from "src/app/_models/base-modal-fields.model";


const ClassroomForm: BaseModalFieldsModel = {
    title: 'New Classroom',
    button_text: 'Create Classroom',
    fields: [
      {
        name: 'Class Name',
        input_type: 'text'
      },
      {
        name: 'Teacher Name',
        input_type: 'text',
        hint:'Name of the lead teacher for this classroom'
      },
      {
        name: 'Classroom Assginment',
        input_type: 'text',
        hint: "What room this class predominantly takes place in"
      }
    ],

}


export const ClassroomForms ={
    NEW_CLASSROOM: ClassroomForm
}