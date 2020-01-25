import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { BaseModalFieldsModel } from 'src/app/_models/base-modal-fields.model';

@Component({
  selector: 'app-basemodal',
  templateUrl: './basemodal.component.html',
  styleUrls: ['./basemodal.component.scss']
})
export class BasemodalComponent {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: BaseModalFieldsModel,
    private _bottomSheetBase: MatBottomSheetRef<BasemodalComponent>
  ) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetBase.dismiss();
    event.preventDefault();
  }

}
