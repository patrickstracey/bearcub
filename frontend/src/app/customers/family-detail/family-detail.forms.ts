import { BaseModalFieldsModel } from "src/app/_models/base-modal-fields.model";


const ContactForm: BaseModalFieldsModel = {
    title: 'New Family Contact',
    button_text: 'Add Contact',
    fields: [
      {
        name: 'Contact Phone',
        input_type: 'text',
        placeholder:"(775) 555-0142",
      },
      {
        name: 'Contact Email',
        input_type: 'text',
        placeholder: "person-name@provider.com"
      }
    ],
}

const AddressForm: BaseModalFieldsModel = {
    title: 'New Address',
    button_text: "Add Address",
    fields: [
        {
            name: "Street",
            input_type: "text",
        },
        {
            name: "Street 2",
            input_type: "text",
        },
        {
            name: "City",
            input_type: "text",
        },
        {
            name: "State",
            input_type: "text",
        },
        {
            name: "Zip Code",
            input_type: "text",
        }
    ]

}

const PaymentForm: BaseModalFieldsModel = {
    title: 'Add Payment Method',
    button_text: "Add Credit Card",
    fields: [
        {
            name: "Card Holder Name",
            input_type: "text",
            hint:"Name of found on the Credit Card"
        },
        {
            name: "Credit Card Number",
            input_type: "text",
        },
        {
            name: "CVV",
            input_type: "text",
            hint:"Three digit number Found on the back of the card"
        }
    ]
}

const StudentForm: BaseModalFieldsModel = {
    title: 'Add Family Student',
    button_text: "Add Student",
    fields: [
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
    ]
}


export const FamilyDetailForms ={
    CONTACT: ContactForm,
    ADDRESS: AddressForm,
    PAYMENT: PaymentForm,
    STUDENT: StudentForm
}