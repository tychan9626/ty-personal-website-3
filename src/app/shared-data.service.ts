import { Injectable } from '@angular/core';
import { UserData } from './user-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private userData: UserData = {
    userLegalFirstName: 'Tsz Yin',
    userLegalLastName: 'Chan',
    userPreferredFirstName: 'TY',
    userDisplayName: 'Tsz Yin Chan',
    internalNavLink: [
      { linkURL: "#work_experience", displayName: "Work Experience" },
      { linkURL: "#software_projects", displayName: "Software Projects" },
      { linkURL: "#education", displayName: "Education" },
      { linkURL: "#technical_skills", displayName: "Technical Skills" },
      { linkURL: "#contact_me", displayName: "Contact Me" },
    ],
    otherPagesNavLink: [
      {
        linkURL: '/log',
        displayName: 'Log'
      }
    ],
    externalNavLink: [
      { linkURL: "https://github.com/tychan9626", displayName: "GitHub" },
      { linkURL: "https://www.linkedin.com/in/ty-chan-192b681a5/", displayName: "LinkedIn" },
    ],
    userSummary: 'Results-driven software developer with 2.5 years of experience in the industry. Proficient in building scalable applications, full-stack development, cloud technologies, and system design. Demonstrated strong problem-solving skills with a proven track record of boosting system performance and reliability. Fast learner of new technologies with a commitment to delivering high-quality code.',
    workExperience: [
      {
        title: 'Programmer',
        company: 'St. Teresas Hospital',
        location: 'Hong Kong',
        startDate: '2022-11-07',
        endDate: '2024-05-20',
        summary: [
          {
            text: "Reduced the speed of loading patient's allergy information in Prescription Information System by 60% through revamping key components for reading patients' data from the government's API.",
            highlightType: "hl101",
            highlightLine0: "Reduced speed",
            highlightLine1: "60",
            highlightLine2: "%",
            highlightLine3: "Loading patient data",
            highlightLine4: "",
            highlightLine5: "",
            highlightLine6: "",
            highlightLine7: "",
            highlightLine8: "Loading speed reduced by 60% for patient data",
            highlightLine9: "\job-sth-feature-1.png"
          },
          {
            text: "Redesigned the backup and local database solution used in the Pharmacy for reducing manual interventions during server outages by implementing automatic data and database schema synchronization with the central server.",
            highlightType: "hl101",
            highlightLine0: "Automatic",
            highlightLine1: "Database",
            highlightLine2: "Synchronization",
            highlightLine3: "",
            highlightLine4: "",
            highlightLine5: "",
            highlightLine6: "",
            highlightLine7: "",
            highlightLine8: "Automatic database synchronization",
            highlightLine9: "\job-sth-feature-2.png"
          },
          {
            text: "Integrated Lexicomp modules into Doctor, Pharmacy, and Ward Systems, providing real-time comprehensive drug data that empowered over 200 medical staffs to make more informed decisions.",
            highlightType: "hl101",
            highlightLine0: "Integrated modules for",
            highlightLine1: "200",
            highlightLine2: "staffs",
            highlightLine3: "",
            highlightLine4: "",
            highlightLine5: "",
            highlightLine6: "",
            highlightLine7: "",
            highlightLine8: "Integrated modules for 200 medical staffs",
            highlightLine9: "\job-sth-feature-3.png"
          },
        ],
        knowledge1: [

        ],
        knowledge2: [
        ],
        knowledge3: [
        ],
        skills1: [
          "VB .NET",
          "Android Java",
          "MS SQL Server Database",
          "Web Services",
          "RESTful API",
          "Retrofit 2"
        ],
        skills2: [
          "Angular",
          "Nest JS",
          "Git",
          "Bitbucket",
          "Jira",
          "Software testing"
        ],
        skills3: [

        ]
      },
    ],
    softwareProjects: [
      {
        name: 'Project 1',
        description: [
          'Description 1',
          'Description 2',
          'Description 3'
        ],
        skills: [
          'Skills 1',
          'Skills 2',
          'Skills 3'
        ],
        link: 'https://github.com/tychan',
        screenCaptureLinks: [
          'https://github.com/tychan',
          'https://github.com/tychan',
          'https://github.com/tychan'
        ]
      }],
    education: [
      {
        name: 'Education 1',
        school: 'School 1',
        location: 'Taiwan',
        startDate: '2020-01-01',
        endDate: '2021-01-01',
        summary: [
          'Summary 1',
          'Summary 2',
          'Summary 3'
        ],
        featuredCourses: [
          'Course 1',
          'Course 2',
          'Course 3'
        ],
        otherCourses: [
          'Course 1',
          'Course 2',
          'Course 3'
        ]
      }],
    technicalSkills: [
      'Skill 1',
      'Skill 2',
      'Skill 3'],
    log: [
      {
        version: '3.0',
        date: '2024-10-24',
        description: [
          "Rewrite website with Angular 18.",
          "Defined structured first before migrating content from old project.",
          "Include website routing.",
          "Include website update log accessable from nav-bar.",
          "Restrict data can be accessed from shared data service file only.",
          "Include observable in shared data service file.",
          "Commit project codes to GitHub.",
        ],
        critical: true
      },
      {
        version: '2.2',
        date: '2024-10-10',
        description: [
          "Move variables to shared data service file.",
          "Add components nav-bar, footer.",
          "Include website update log."
        ],
        critical: false
      },
      {
        version: '2.1',
        date: '2024-10-3',
        description: [
          "Create shared data service file in Angular for sharing data between components.",
          "Split components into separate files.",
          "Update website icon.",
        ],
        critical: false
      },
      {
        version: '2.0',
        date: '2024-9-28',
        description: [
          "Rewrite website with Angular 18.",
          "Commit project codes to GitHub.",
          "Build website with Angular CLI and deploy to Cloudflare.",
        ],
        critical: true
      },
      {
        version: '1.5',
        date: '2024-9-15',
        description: [
          "Website content updated."
        ],
        critical: false
      },
      {
        version: '1.4',
        date: '2024-9-7',
        description: [
          "Website content updated.",
          "Include diagrams for software projects."
        ],
        critical: false
      },
      {
        version: '1.3',
        date: '2024-9-2',
        description: [
          "Website content updated."
        ],
        critical: false
      },
      {
        version: '1.2',
        date: '2024-8-27',
        description: [
          "Website content updated."
        ],
        critical: false
      },
      {
        version: '1.1',
        date: '2024-8-26',
        description: [
          "Website content updated.",
          "Website styles updated."
        ],
        critical: false
      },
      {
        version: '1.0',
        date: '2024-8-20',
        description: [
          "Initial version.",
          "Website developed with Google Sites.",
          "Domain purchased, and hosted on Cloudflare."
        ],
        critical: true
      }
    ]
  }

  private userDataSource = new BehaviorSubject<UserData>(this.userData);
  userData$ = this.userDataSource.asObservable();

  constructor() { }
}
