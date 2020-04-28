import { BaseModalFieldsModel } from "src/app/_models/base-modal-fields.model";

const StaffForm: BaseModalFieldsModel = {
    title: 'New Staff Onboarding',
    button_text: 'Create Staff Profile',
    fields: [
      {
        name: 'First Name',
        input_type: 'text',
        hint:"First Name of New Staff Member",
      },
      {
        name: 'Last Name',
        input_type: 'text',
        hint:"Last Name of New Staff Member"
      },
      {
        name: 'Hourly Wage',
        input_type: 'number',
        hint: "How much this staff is making an hour"
      },
      {
        name: 'Start Date',
        input_type: 'date',
        hint:'Date this new staff member begins work'
      }
    ],

}

export const StaffForms = {
    NEW_STAFF: StaffForm
}