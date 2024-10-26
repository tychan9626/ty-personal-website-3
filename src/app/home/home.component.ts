import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { education, softwareProjects, UserData, workExperience } from '../user-data.model';
import { DatePipe, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userDisplayName!: string;
  userSummary!: string;
  workExperience!: workExperience[];
  softwareProjects!: softwareProjects[];
  education!: education[];
  technicalSkills!: string[];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.userData$.subscribe((data: UserData) => {
      this.userDisplayName = data.userDisplayName;
      this.userSummary = data.userSummary;
      this.workExperience = data.workExperience;
      this.softwareProjects = data.softwareProjects;
      this.education = data.education;
      this.technicalSkills = data.technicalSkills;
      
    });
  }



  openDialog() {
    alert('This is a dynamic dialog!');
  }

  navigateURL(url: string) {
    window.location.href = url;
  }
}
