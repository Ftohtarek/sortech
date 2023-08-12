import { Component, Input } from '@angular/core';
import { DealModel } from 'src/app/models/deal.model';

@Component({
  selector: 'sor-stage-card',
  templateUrl: './stage-card.component.html',
  styleUrls: ['./stage-card.component.scss']
})
export class StageCardComponent {
  @Input() deal?: DealModel
}
