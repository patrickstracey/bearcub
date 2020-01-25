import { NgModule } from "@angular/core";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';


@NgModule({
    imports: [ MatSidenavModule, MatToolbarModule, MatButtonModule,
               MatIconModule, MatListModule, MatCardModule,
               MatFormFieldModule, MatInputModule, MatTableModule,
               MatPaginatorModule, MatChipsModule, MatExpansionModule,
               MatSelectModule, MatSliderModule, MatBottomSheetModule ],
    exports: [ MatSidenavModule, MatToolbarModule, MatButtonModule,
               MatIconModule, MatListModule, MatCardModule,
               MatFormFieldModule, MatInputModule,MatTableModule,
               MatPaginatorModule, MatChipsModule, MatExpansionModule,
               MatSelectModule, MatSliderModule, MatBottomSheetModule ]
})

export class MaterialModule {}