import { NgModule } from "@angular/core";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
    imports: [ MatSidenavModule, MatToolbarModule, MatButtonModule,
               MatIconModule, MatListModule, MatCardModule,
               MatFormFieldModule, MatInputModule ],
    exports: [ MatSidenavModule, MatToolbarModule, MatButtonModule,
               MatIconModule, MatListModule, MatCardModule,
               MatFormFieldModule, MatInputModule ]
})

export class MaterialModule {}