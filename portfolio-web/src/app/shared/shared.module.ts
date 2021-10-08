import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SnackbarComponent } from './services/notification/snackbar/snackbar.component';
import {ToastModule} from 'primeng/toast';
import { NotificationService } from './services/notification/notification.service';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    RouterModule,
    BrowserModule,
    ToastModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    ButtonModule,
    SnackbarComponent
  ]
})
export class SharedModule { 

  static forRoot():ModuleWithProviders<SharedModule>{
    return {
      ngModule: SharedModule,
      providers: [NotificationService, MessageService]
    }
  }

}
