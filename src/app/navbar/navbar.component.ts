import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navLink, UserData } from '../user-data.model';
import { SharedDataService } from '../shared-data.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,NgFor,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userDisplayName!: string;
  internalNavLinks!: navLink[];
  externalNavLink!: navLink[];
  otherPagesNavLink!: navLink[];

  isNavbarCollapsed = true;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.userData$.subscribe((data: UserData) => {
      this.userDisplayName = data.userDisplayName;
      this.internalNavLinks = data.internalNavLink;
      this.externalNavLink = data.externalNavLink;
      this.otherPagesNavLink = data.otherPagesNavLink;
    });
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar() {
    this.isNavbarCollapsed = true; // 點擊後折疊導航欄
  }
}
