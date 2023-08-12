import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StageAddComponent } from './components/stage-add/stage-add.component';
import { StageCardComponent } from './components/stage-card/stage-card.component';
import { StageHeaderComponent } from './components/stage-header/stage-header-component';
import { CrmManagmentRoutingModule } from './crm-managment-routing.module';
import { CrmManagmentComponent } from './crm-managment.component';

import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CrmManagmentComponent,

    StageCardComponent
  ],
  imports: [
    CommonModule,
    CrmManagmentRoutingModule,
    DragDropModule,
    StageHeaderComponent,
    StageAddComponent,

    MatButtonModule,
    MatTooltipModule,
    MatIconModule
  ]
})
export class CrmManagmentModule { }
