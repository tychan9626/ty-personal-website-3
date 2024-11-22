import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { tyApiResponseSectionLog, tySectionLog } from '../user-data.model';
import { DatePipe, NgStyle } from '@angular/common';
import { LoadingPageComponent } from "../shared-resources/loading-page/loading-page.component";

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [DatePipe, NgStyle, LoadingPageComponent],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  tySectionLog!: tySectionLog;
  alwaysShowLoading = true;
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.tySectionLogDataSource$.subscribe({
      next: (data: tySectionLog) => {
        this.tySectionLog = data;
      },
      error: (error) => {
        console.error('Error fetching logs:', error);
      }
    })
  }

}
