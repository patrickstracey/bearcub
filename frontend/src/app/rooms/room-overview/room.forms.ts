import { BaseModalFieldsModel } from "src/app/_models/base-modal-fields.model";


const RoomForm: BaseModalFieldsModel = {
    title: 'New Room',
    button_text: 'Create Room',
    fields: [
      {
        name: 'Room Name',
        input_type: 'text'
      },
      {
        name: 'Building Name',
        input_type: 'text',
        hint:'What building is this room located in'
      },
      {
        name: 'Room Size (square feet)',
        input_type: 'number',
        hint: "What size is this room?"
      }
    ],

}


export const RoomForms ={
    NEW_ROOM: RoomForm
}