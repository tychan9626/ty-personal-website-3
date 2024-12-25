import { Component } from '@angular/core';
import { DatePipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { education, navLink, softwareProjects, technicalSkills, UserData, userImg, workExperience } from '../user-data.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, NgStyle, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userDisplayName!: string;
  userImg!: userImg;
  userSummary!: string;
  workExperience!: workExperience[];
  workExperienceChunked!: workExperience[][];
  softwareProjects!: softwareProjects[];
  education!: education[];
  technicalSkills!: technicalSkills;

  internalNavLinks!: navLink[];
  externalNavLink!: navLink[];
  otherPagesNavLink!: navLink[];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.userData$.subscribe((data: UserData) => {
      this.userDisplayName = data.userDisplayName;
      this.userImg = data.userImg;
      this.userSummary = data.userSummary;
      this.workExperience = data.workExperience;
      this.softwareProjects = data.softwareProjects;
      this.education = data.education;
      this.technicalSkills = data.technicalSkills;

      this.internalNavLinks = data.internalNavLink;
      this.externalNavLink = data.externalNavLink;
      this.otherPagesNavLink = data.otherPagesNavLink;
    });
  }

  navigateURL(url: string) {
    window.open(url, '_blank');
  }
}
