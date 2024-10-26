import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { navLink, UserData } from '../user-data.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  userDisplayName!: string;
  externalNavLink!: navLink[];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.userData$.subscribe((data: UserData) => {
      this.userDisplayName = data.userDisplayName;
      this.externalNavLink = data.externalNavLink;
    });
  }
}
