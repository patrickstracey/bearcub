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


@NgModule({
    imports: [ MatSidenavModule, MatToolbarModule, MatButtonModule,
               MatIconModule, MatListModule, MatCardModule,
               MatFormFieldModule, MatInputModule, MatTableModule,
               MatPaginatorModule, MatChipsModule, MatExpansionModule ],
    exports: [ MatSidenavModule, MatToolbarModule, MatButtonModule,
               MatIconModule, MatListModule, MatCardModule,
               MatFormFieldModule, MatInputModule,MatTableModule,
               MatPaginatorModule, MatChipsModule, MatExpansionModule ]
})

export class MaterialModule {}