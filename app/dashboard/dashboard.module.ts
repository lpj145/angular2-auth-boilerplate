import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from '../menu/menu.module';

import { DashBoardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [ DashBoardComponent ],
  providers: [],
  exports: [ DashBoardComponent ]
})
export class DashBoard {
  constructor() {  }

  ngOnInit() {}
}
