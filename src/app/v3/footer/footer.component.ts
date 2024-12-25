import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';
import { navLink, version, tySectionLog, UserData } from '../user-data.model';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  userDisplayName!: string;
  externalNavLink!: navLink[];
  logVersion!: version;
  logDate!: string;

  testData: any;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.userData$.subscribe((data: UserData) => {
      this.userDisplayName = data.userDisplayName;
      this.externalNavLink = data.externalNavLink;
    });
    this.sharedDataService.tySectionLogDataSource$.subscribe({
      next: (data: tySectionLog) => {
        this.logVersion = data.logs[0].version;
        this.logDate = data.logs[0].date;
      },
      error: (error) => {
        console.error('Error fetching logs:', error);
      }
    })
  }


}
