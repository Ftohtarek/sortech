import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmManagmentComponent } from './screen/crm-managment/crm-managment.component';
import { NotfoundComponent } from './screen/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'managment', pathMatch: 'full' },
  {
    path: 'managment', loadChildren: () => import('./screen/crm-managment/crm-managment.module')
      .then(m => m.CrmManagmentModule)
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
