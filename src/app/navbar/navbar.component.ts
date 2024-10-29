import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navLink, UserData } from '../user-data.model';
import { SharedDataService } from '../shared-data.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgFor, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userDisplayName!: string;
  internalNavLinks!: navLink[];
  externalNavLink!: navLink[];
  otherPagesNavLink!: navLink[];

  @ViewChild('navbarNav', { static: false }) navbarNav!: ElementRef;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.userData$.subscribe((data: UserData) => {
      this.userDisplayName = data.userDisplayName;
      this.internalNavLinks = data.internalNavLink;
      this.externalNavLink = data.externalNavLink;
      this.otherPagesNavLink = data.otherPagesNavLink;
    });
  }

  closeMenu() {
    if (window.innerWidth < 992) {  // 僅在小螢幕上收起菜單
      const navbar = this.navbarNav.nativeElement;
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
    }
  }

}
