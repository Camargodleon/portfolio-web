import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from './shared/shared.module';
import {ButtonModule} from 'primeng/button';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ServicoComponent } from './servico/servico.component';
import { ContatoComponent } from './contato/contato.component';
import { AdminComponent } from './admin/admin.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TecnologiaComponent,
    ServicoComponent,
    ContatoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(routes),
    ButtonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    CardModule,
    DialogModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
