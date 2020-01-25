import { BaseModalFieldsModel } from 'src/app/_models/base-modal-fields.model';

const Checkin: BaseModalFieldsModel = {
    title: 'Check-in Student',
    button_text: 'Check-in Student',
    fields: [
      {
        name: 'Student First Name',
        input_type: 'text',
        placeholder:'Name of new student',
      }
    ]
}

const Enrollment: BaseModalFieldsModel = {
    title: 'Enroll a New Student',
    button_text: 'Enroll New Student',
    fields: [
      {
        name: 'Student First Name',
        input_type: 'text',
        placeholder:'Name of new student',
        hint: 'What the student prefers to be called'
      },
      {
        name: 'Student Last Name',
        input_type: 'text',
        placeholder:'Last name of new student'
      },
      {
        name: 'Student Age',
        input_type: 'number',
        hint:'Current age of the student'
      }
    ],
}

const Payment: BaseModalFieldsModel = {
    title: 'Process Payment',
    button_text: 'Process Payment',
    fields: [
      {
        name: 'Card Number',
        input_type: 'text',
        placeholder:'**** **** **** ****',
      },
      {
        name: 'Amount',
        input_type: 'number',
        placeholder: 'USD ($)',
        hint:'Amount to charge'
      }
    ],
}

export const DashboardForms = {
    CHECKIN: Checkin,
    ENROLLMENT: Enrollment,
    PAYMENT: Payment
}

