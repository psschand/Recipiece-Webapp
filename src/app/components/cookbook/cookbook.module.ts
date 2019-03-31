import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CookbookRoutingModule} from './cookbook-routing.module';
import {CookbookComponent} from './cookbook.component';
import {SharedModule} from '../shared/shared.module';
import {MatPaginatorModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CookbookRoutingModule,
    SharedModule,
    MatPaginatorModule,
  ],
  declarations: [
    CookbookComponent,
  ],
})
export class CookbookModule {
}
