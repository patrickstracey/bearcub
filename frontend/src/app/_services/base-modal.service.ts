import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BasemodalComponent } from '../shared/modal/basemodal/basemodal.component';
import { BaseModalFieldsModel } from '../_models/base-modal-fields.model';

@Injectable({
  providedIn: 'root'
})
export class BaseModalService {

  constructor(private _bottomModal: MatBottomSheet) { }

  openBottomSheet(modal_info: BaseModalFieldsModel): void {
    this._bottomModal.open(BasemodalComponent, { data: modal_info },);
  }
}
