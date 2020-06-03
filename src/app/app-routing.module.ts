import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {LoginComponent} from './login/login.component';
import {GridViewComponent} from './employees/grid-view/grid-view.component';
import {ListViewComponent} from './employees/list-view/list-view.component';


const routes: Routes = [{
  path: '', component: LoginComponent},
  {path: 'employees', component: EmployeesComponent, children:[{
    path:':currentPage', component: EmployeesComponent
    }]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
