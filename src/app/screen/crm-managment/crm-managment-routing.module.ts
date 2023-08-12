import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmManagmentComponent } from './crm-managment.component';

const routes: Routes = [
  { path: '', component: CrmManagmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmManagmentRoutingModule { }
