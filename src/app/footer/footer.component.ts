import { log } from './../user-data.model';
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { navLink, UserData } from '../user-data.model';
import { DatePipe, NgFor } from '@angular/common';

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
  logVersion!: string;
  logDate!: string;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.userData$.subscribe((data: UserData) => {
      this.userDisplayName = data.userDisplayName;
      this.externalNavLink = data.externalNavLink;
      this.logVersion = data.log.logDetails[0].version;
      this.logDate = data.log.logDetails[0].date;
    });
  }
}
