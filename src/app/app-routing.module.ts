import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { DeveloperdetailsComponent } from './MyComponents/developerdetails/developerdetails.component';
import { FormComponent } from './MyComponents/form/form.component';
import { InfoComponent } from './MyComponents/info/info.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/dashboard', pathMatch:'full'},
  {path:"dashboard", component:DashboardComponent},
  {path:"form",component:FormComponent},
  {path:"info",component:InfoComponent,children:[
    {path:"developer",component:DeveloperdetailsComponent}
  ]},
  {path:"**", component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
