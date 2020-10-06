import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MapComponent } from './dashboard/components/map/map.component';
import { CalendarComponent } from './dashboard/components/calendar/calendar.component';
import { CustomersComponent } from './dashboard/components/customers/customers.component';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DashboardComponent,
    Error404Component,
    LoginComponent,
    MapComponent,
    CalendarComponent,
    CustomersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DragDropModule,
    BrowserAnimationsModule
  ],
  exports: [
    DashboardComponent,
    Error404Component,
    LoginComponent
  ]
})
export class PagesModule { }
