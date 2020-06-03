import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import {LoginService} from './login/login.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GridViewComponent } from './employees/grid-view/grid-view.component';
import { ListViewComponent } from './employees/list-view/list-view.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {EmployeesService} from './employees/employees.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    GridViewComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [LoginService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
