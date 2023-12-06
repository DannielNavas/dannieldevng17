import { Component, Input } from '@angular/core';
import { IResponseStatistics } from '@domain/shared/models/statistics.interface';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  @Input() stast!: IResponseStatistics;
}
