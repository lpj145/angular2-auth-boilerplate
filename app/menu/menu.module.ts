import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';

import { SideBarComponent } from './sidebar/sidebar.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ SideBarComponent, NavMenuComponent ],
  exports: [ SideBarComponent, NavMenuComponent ],
  providers: [ AuthService ]
})

export class MenuModule {}
