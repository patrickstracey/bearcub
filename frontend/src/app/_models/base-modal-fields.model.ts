export interface ModalFieldInterface{
        name: string,
        input_type: string,
        placeholder?: string,
        hint?: string
}

export class BaseModalFieldsModel{
    constructor(
        public title: string,
        public button_text: string,
        public fields: ModalFieldInterface[]
    ){}
}