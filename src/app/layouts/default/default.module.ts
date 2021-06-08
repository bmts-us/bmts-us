import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from 'src/app/layouts/default/default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { EmployeesComponent } from 'src/app/modules/employees/employees.component';
import {RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeListComponent } from 'src/app/modules/employee-list/employee-list.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
