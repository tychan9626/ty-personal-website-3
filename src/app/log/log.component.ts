import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { log, tySectionLog } from '../user-data.model';
import { DatePipe, NgStyle } from '@angular/common';
import { LoadingPageComponent } from "../shared-resources/loading-page/loading-page.component";

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [DatePipe, NgStyle],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  tySectionLog!: tySectionLog;

  logsByCategory: { [key: string]: log[] } = {};
  categories: string[] = [];
  selectedCategory = 'Frontend';

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.tySectionLogDataSource$.subscribe({
      next: (data: tySectionLog) => {
        this.tySectionLog = data;
        this.logsByCategory = data.logs.reduce((acc, log) => {
          const category = log.category || 'Frontend';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(log);
          return acc;
        }, {} as { [key: string]: log[] });

        console.log(JSON.stringify(this.logsByCategory));

        this.categories = Object.keys(this.logsByCategory);
      },
      error: (error) => {
        console.error('Error fetching logs:', error);
      }
    })
  }

}
