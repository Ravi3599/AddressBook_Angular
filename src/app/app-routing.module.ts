import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { FormComponent } from './MyComponents/form/form.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/dashboard', pathMatch:'full'},
  {path:"dashboard", component:DashboardComponent},
  {path:"form",component:FormComponent},
  {path:"**", component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
