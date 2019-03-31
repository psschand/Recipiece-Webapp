import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatSidenavModule} from '@angular/material';
import {SidebarListComponent} from './sidebar-list/sidebar-list.component';
import {SidebarUserProfileComponent} from './sidebar-user-profile/sidebar-user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
  ],
  declarations: [
    SidebarComponent,
    SidebarListComponent,
    SidebarUserProfileComponent,
  ],
  exports: [
    SidebarComponent,
  ],
})
export class SidebarModule {
}
