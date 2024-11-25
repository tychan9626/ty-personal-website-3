import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { log } from '../user-data.model';
import { DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [DatePipe, NgStyle],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  logPageTitle = '';
  logsByCategory: { [key: string]: log[] } = {};
  categories: string[] = [];
  selectedCategory = 'Frontend';

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.tySectionLogDataSource$.subscribe({
      next: (data) => {
        if (data) {
          this.logPageTitle = this.sharedDataService.getLogPageTitle();
        } else {
          console.log('No data available in sharedDataService');
        }
      },
      error: (error) => {
        console.error('Error fetching log data:', error);
      },
    });

    this.sharedDataService.logsByCategory$.subscribe(logs => {
      this.logsByCategory = logs;  // 當資料更新時，更新本地屬性
      this.categories = Object.keys(logs);  // 更新分類
    });
  }
}
