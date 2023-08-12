import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sor-stage-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './stage-header.component.html',
  styleUrls: ['./stage-header.component.scss']
})
export class StageHeaderComponent {

}
