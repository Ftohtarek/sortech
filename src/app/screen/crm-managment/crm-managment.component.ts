import { Component, OnInit } from '@angular/core';
import { IDeal } from 'src/app/interface/deal.interface';
import { DealApiService } from 'src/app/services/deal-api.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DealModel } from 'src/app/models/deal.model';
import { Stage, Stages } from 'src/app/models/Stages.model';
import { CdkLayoutService } from 'src/services/cdk-layout.service';

@Component({
  selector: 'app-crm-managment',
  templateUrl: './crm-managment.component.html',
  styleUrls: ['./crm-managment.component.scss']
})
export class CrmManagmentComponent implements OnInit {
  stagesHeader: Stage[] = ['Potential Value', 'Focus', 'Getting Ready', 'Contact Made']
  deals: DealModel[] = []
  stages: Stages = <Stages>{}
  isDragged: boolean = false;
  constructor(public dealApi: DealApiService, public deviceMode: CdkLayoutService) { }
  ngOnInit(): void {
    this.dealApi.getAll.subscribe(data => {
      this.deals = data.map(res => new DealModel(res))
      this.stages = new Stages(this.deals)
    })
  }
  drop(event: CdkDragDrop<any[]>, statge: Stage) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      let cup = this.stages.items[statge][event.currentIndex]?.state()
      if (cup) {
        this.stages.items[<Stage>event.previousContainer.id][event.previousIndex]?.updateState(this.stages.items[<Stage>event.container.id][event.currentIndex]?.state())
        this.stages.items[statge][event.currentIndex].updateState(cup)
      }
      

      transferArrayItem(
        this.stages.items[<Stage>event.previousContainer.id],
        this.stages.items[statge],
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.log(this.stages);

    // this.deals = event.container.data
    this.stages.setupHeaderInfo()
  }
}
