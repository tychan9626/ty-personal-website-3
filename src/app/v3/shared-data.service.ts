import { Injectable } from '@angular/core';
import { log, new_bill_init_data, project_preview, ty_api_get_new_bill_init_data, ty_api_get_projects_preview, ty_api_projects_preview_response_data, tyApiResponseSectionLog, tySectionLog, UserData, version } from './user-data.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private isTesting = false;
  private apiUrl = environment.apiUrl;
  private userData: UserData = {
    userLegalFirstName: 'Tsz Yin',
    userLegalLastName: 'Chan',
    userPreferredFirstName: 'TY',
    userDisplayName: 'Tsz Yin Chan',
    userImg: {
      'regular': 'CTY.jpg',
      'banner': 'CTY_Banner_right.jpg'
    },
    internalNavLink: [
      { url: '#work_experience', displayName: 'Work Experience' },
      { url: '#software_projects', displayName: 'Software Projects' },
      { url: '#education', displayName: 'Education' },
      { url: '#technical_skills', displayName: 'Technical Skills' },
      { url: '#contact_me', displayName: 'Contact Me' },
    ],
    otherPagesNavLink: [
      {
        url: '/log',
        displayName: 'Website log',
      },
    ],
    externalNavLink: [
      { url: 'https://github.com/tychan9626', displayName: 'GitHub' },
      {
        url: 'https://www.linkedin.com/in/ty-chan-192b681a5/',
        displayName: 'LinkedIn',
      }
    ],
    userSummary:
      'Results-driven software developer with 2.5 years of experience in the industry. Proficient in building scalable applications, full-stack development, cloud technologies, and system design. Demonstrated strong problem-solving skills with a proven track record of boosting system performance and reliability. Fast learner of new technologies with a commitment to delivering high-quality code.',
    workExperience: [
      {
        title: 'Programmer',
        company: 'St. Teresas Hospital',
        location: 'Hong Kong',
        startDate: '2022-11-07',
        endDate: '2024-05-20',
        summary: {
          displayCode: 'dp01',
          description: [
            {
              desc: "Reduced the speed of loading patient's allergy information in Prescription Information System by 60% through revamping key components for reading patients' data from the government's API.",
              descKey0: 'text-dark',
              descKey1: 'bg-light',
              descKey2: 'job-sth-feature-1.png',
              descKey3: 'Loading speed reduced by 60% for patient data',
              descKey4: '', //Details
              descKey5: '', ///feature/sth-reduce-load-speed
            },
            {
              desc: 'Redesigned the backup and local database solution used in the Pharmacy for reducing manual interventions during server outages by implementing automatic data and database schema synchronization with the central server.',
              descKey0: 'text-dark',
              descKey1: 'bg-light',
              descKey2: 'job-sth-feature-2.png',
              descKey3: 'Automatic database synchronization',
              descKey4: '', //Details
              descKey5: '', ///feature/sth-sync-db
            },
            {
              desc: 'Integrated Lexicomp modules into Doctor, Pharmacy, and Ward Systems, providing real-time comprehensive drug data that empowered over 200 medical staffs to make more informed decisions.',
              descKey0: 'text-dark',
              descKey1: 'bg-light',
              descKey2: 'job-sth-feature-3.png',
              descKey3: 'Integrated modules for 200 medical staffs',
            },
          ]
        },
        skillsList: {
          displayCode: 'dp11',
          skillsSet: [
            {
              title: "Programming Languages & Frameworks",
              items: [
                'VB .NET',
                'Android Java',
                'Retrofit 2',
                'Angular',
                'Nest JS',
              ]
            },
            {
              title: "Database Technologies",
              items: [
                'MS SQL Server Database',
              ]
            },
            {
              title: "API Development",
              items: [
                'Web Services',
                'RESTful API',
              ]
            },
            {
              title: "Version Control & Collaboration Tools",
              items: [
                'Git',
                'Bitbucket',
              ]
            },
            {
              title: "Project Management",
              items: [
                'Jira',
              ]
            },
            {
              title: "Others",
              items: [
                'Software testing',
              ]
            },
          ]
        },
      },
      {
        title: 'System Engineer (Intern)',
        company: 'Multisoft Limited',
        location: 'Hong Kong',
        startDate: '2020-06-07',
        endDate: '2021-06-30',
        summary: {
          displayCode: 'dp02',
          description: [
            {
              desc: "Reduced manual workload for 70% in handling client FTP requests by developing and deploying a Java-based FTP automation solution which structured and executed commands based on client requirements, streamlining the process.",
              descKey0: 'text-dark',
              descKey1: 'bg-light',
            },
            {
              desc: "Led the migration of 120 users' PCs, ensuring minimal downtime through an efficient process.",
              descKey0: 'text-dark',
              descKey1: 'bg-light',
            },
            {
              desc: "Improved collaboration efficiency by 30% during the pandemic through provided technical guidance and created tutorials for using remote computing and video conferencing tools.",
              descKey0: 'text-dark',
              descKey1: 'bg-light',
            },
          ]
        },
        skillsList: {
          displayCode: 'dp12',
          skillsSet: [
            {
              title: "Programming Languages",
              items: [
                'Java',
              ]
            },
            {
              title: "Problem-Solving & Analytical Skills",
              items: [
                'Troubleshooting',
                'Understanding complex systems'
              ]
            },
            {
              title: "Automation & Efficiency",
              items: [
                'Automation',
              ]
            },
            {
              title: "Technical Documentation",
              items: [
                'Creating technical guides',
              ]
            }
          ]
        },
      },
    ],
    softwareProjects: [
      {
        displayCode: 'dp21',
        name: 'TY Personal Website',
        description: [
          {
            desc: "Created a modern personal website that adapts to various screen sizes, with optimized layouts and transitions for both wide and small screens. Enhanced user experience with dynamic animations and smooth, layered gradient effects.",
            descKey0: 'text-dark',
            descKey1: 'bg-light',
            descKey2: 'proj_personal-website-responsive-design.png',
            descKey3: 'Responsive and Adaptive Design',
          },
          {
            desc: "Built using Angular for modular component management and Bootstrap’s grid system for responsive styling. Customized CSS animations and media queries to ensure seamless visual consistency across devices.",
            descKey0: 'text-dark',
            descKey1: 'bg-light',
            descKey2: 'proj_personal-website-angular-bootstrap.png',
            descKey3: 'Frontend Development with Angular and Bootstrap',
          },
          {
            desc: "Integrated with Node.js for efficient form handling and API calls, with potential MongoDB backend support for dynamic data management.",
            descKey0: 'text-dark',
            descKey1: 'bg-light',
            descKey2: 'proj_personal-website-fe-be-db.png',
            descKey3: 'Backend Integration and API Handling',
          }
        ],
        skills: [
          '<b>Frontend</b>: <br>Angular, TypeScript, HTML, CSS, Bootstrap',
          '<b>Backend</b>: <br>Node.js (for form handling and API integration)',
          '<b>Database</b>: <br>MongoDB (Dynamically access and modify personal data)',
          '<b>Design and Styling</b>: <br>CSS animations, media queries for adaptive layouts, Bootstrap’s grid system for responsive behavior'
        ],
        link: 'https://github.com/tychan9626/ty-personal-website-3',
        screenCaptureLinks: [
          'proj-personal-website-home-page.png',
          'proj-personal-website-home-page2.png'
        ],
      },
      {
        displayCode: 'dp22',
        name: 'AI-powered Video Super Resolution Tool based on Convolutional Neural Network (CNN)',
        description: [
          {
            desc: "Utilizing the Image Super-Resolution Using Deep Convolutional Networks (SR-CNN) algorithm to upscale low-resolution videos into high definition. Integrated deep learning techniques to enhance image clarity, reduce noise, and restore fine details, resulting in sharper and more realistic outputs.",
            descKey0: 'text-dark',
            descKey1: 'bg-light',
          },
          {
            desc: "Supported a wide range of video formats; offered customizable settings, enabling users to adjust resolution, processing intensity, and output quality based on their specific requirements.",
            descKey0: 'text-dark',
            descKey1: 'bg-light',
          }
        ],
        skills: [
          'Python',
          'PyTorch',
          'OpenCV',
          'Pillow',
          'FFmpeg',
          'Numpy',
          'Tkinter',
          'tkVideo',
          'Json',
          'Anaconda',
          'Machine learning algorithms'
        ],
        link: 'https://github.com/tychan9626/AI-powered-Video-Super-Resolution-Tool-based-on-Convolutional-Neural-Network',
        screenCaptureLinks: [
          'proj_ai-vid-super-res-flow.png',
        ],
      },
      {
        displayCode: 'dp22',
        name: 'Big 2 Poker game play with command line interface',
        description: [
          {
            desc: "Implemented game mechanics that followed official Big 2 rules, including card ranking, turn logic, and winning conditions.",
            descKey0: 'text-dark',
            descKey1: 'bg-light',
          },
          {
            desc: "Integrated error handling and validation to ensure only valid moves are allowed, enhancing the stability and user experience of the game.",
            descKey0: 'text-dark',
            descKey1: 'bg-light',
          },
          {
            desc: "Integrated with Node.js for efficient form handling and API calls, with potential MongoDB backend support for dynamic data management.",
            descKey0: 'text-dark',
            descKey1: 'bg-light',
            descKey2: 'Backend Integration and API Handling',
          }
        ],
        skills: [
          'Java',
          'Java Development Kit',
          'Eclipse IDE',
          'Object-Oriented Programming',
          'System I/O',
          'JUnit Testing',
          'Git'
        ],
        link: 'https://github.com/tychan9626/Big-2-Poker-game-play-with-command-line-interface',
        screenCaptureLinks: [
        ],
      },
    ],
    education: [
      {
        displayCode: 'dp31',
        name: 'Bachelor of Science in Computer Science',
        school: 'City University of Hong Kong',
        location: 'Hong Kong',
        startDate: '2018-09-01',
        endDate: '2022-08-31',
        summary: ["In-major GPA 3.12."],
        featuredCourses: [
          "Software Engineering Practice (Grade: A)",
          "Design and Analysis of Algorithms (Grade: A-)",
          "Internet Applications and Security (Grade: A)",
          "English Communication Skills for Computing (Grade: A-)"
        ],
        otherCourses: ['Database Systems',
          'Data Structures',
          'Software Design',
          'Operating Systems',
          'Computer Networks',
          'Computer Organization',
          'Internet Applications Development',
          'Problem Solving and Programming',
          'Software Testing and Maintenance',
          'Managing Software Projects',
          'Software Quality Management'],
      },
    ],
    technicalSkills: {
      displayCode: 'dp41',
      technicalSkillsDetails: [
        {
          name: 'Proficient',
          skills:
            [
              'Angular',
              'Node JS',
              'MongoDB',
              'VB .NET',
              'Java',
              'Python',
              'Android (Java)',
              'Microsoft SQL',
              'RESTful API',
              'JavaScript',
              'TypeScript',
              'HTML/CSS',
              'Git',
              'Jira',
              'CI/CD pipelines',
              'Software testing & debugging'
            ]
        },
        {
          name: 'Familiar',
          skills: [
            'C++',
            'Web Services',
            'Android (Kotlin)',
            'Microsoft Azure',
          ]
        }
      ]
    },
    credit: {
      displayCode: 'dp51',
      creditDetails: [
        {
          title: 'Responsive website design image',
          info: 'Image by <a href="https://pixabay.com/users/kreatikar-8562930/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6351151">Mudassar Iqbal</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6351151">Pixabay</a>',
          active: false,
          remarks: 'Imaged removed from website.'
        },
        {
          title: 'Frontend icon',
          info: '<a href="https://www.flaticon.com/free-icons/design" title="design icons">Design icons created by Freepik - Flaticon</a>',
          active: true,
          remarks: ''
        },
        {
          title: 'Backend icon',
          info: '<a href="https://www.flaticon.com/free-icons/backend" title="backend icons">Backend icons created by Flat Icons - Flaticon</a>',
          active: true,
          remarks: ''
        },
        {
          title: 'Database icon',
          info: '<a href="https://www.flaticon.com/free-icons/server-admin" title="server admin icons">Server admin icons created by ranksol graphics - Flaticon</a>',
          active: true,
          remarks: ''
        }
      ]
    }
  };
  private userDataSource = new BehaviorSubject<UserData>(this.userData);
  userData$ = this.userDataSource.asObservable();

  private tySectionLog!: tySectionLog;
  private tySectionLogDataSource = new BehaviorSubject<tySectionLog>(this.tySectionLog);
  tySectionLogDataSource$ = this.tySectionLogDataSource.asObservable();

  private logsByCategorySubject = new BehaviorSubject<{ [key: string]: log[] }>({});
  private latestVersionByCategorySubject = new BehaviorSubject<{ [key: string]: version }>({});
  logsByCategory$ = this.logsByCategorySubject.asObservable();
  latestVersionByCategory$ = this.latestVersionByCategorySubject.asObservable();

  setLogsByCategory(logs: { [key: string]: log[] }) {
    this.logsByCategorySubject.next(logs); // 發送新資料
  }
  setLatestVersionByCategory(versions: { [key: string]: version }) {
    this.latestVersionByCategorySubject.next(versions); // 發送新資料
  }

  constructor(private http: HttpClient) { }

  connectTySectionLog(): void {
    this.http.get<tyApiResponseSectionLog>(`${this.apiUrl}/tySectionLog`).subscribe({
      next: (response: tyApiResponseSectionLog) => {
        if (
          response.success &&
          response.data.page_log_title !== '' &&
          response.data.display_mode !== '' &&
          response.data.logs.length > 0
        ) {
          this.tySectionLog = response.data;
          this.tySectionLogDataSource.next(this.tySectionLog);
          //console.log(JSON.stringify(this.tySectionLog));
          this.setTySectionLog();
        } else {
          console.log('No logs found or request failed');
        }
      },
      error: (error) => {
        console.error('Error fetching logs:', error);
      },
    });
  }

  setTySectionLog(): void {
    const logsByCategory = this.tySectionLog.logs.reduce((acc, log) => {
      const category = log.category || 'Frontend';  // 默認 'Frontend'
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(log);
      return acc;
    }, {} as { [key: string]: log[] });


    const latestVersionByCategory = Object.keys(logsByCategory).reduce((acc, category) => {
      const logs = logsByCategory[category];

      if (logs && logs.length > 0) {
        const latestLog = logs.reduce((latest, current) => {
          const currentPatch = current.version.patch ?? 0;
          const latestPatch = latest.version.patch ?? 0;

          if (
            current.version.major > latest.version.major ||
            (current.version.major === latest.version.major &&
              current.version.minor > latest.version.minor) ||
            (current.version.major === latest.version.major &&
              current.version.minor === latest.version.minor &&
              currentPatch > latestPatch)
          ) {
            return current;
          }
          return latest;
        });

        acc[category] = {
          major: latestLog.version.major,
          minor: latestLog.version.minor,
          patch: latestLog.version.patch ?? 0,
        };
      }
      return acc;
    }, {} as { [key: string]: version });
    this.setLogsByCategory(logsByCategory);
    this.setLatestVersionByCategory(latestVersionByCategory);
  }

  getLogPageTitle(): string {
    return this.tySectionLog.page_log_title;
  }


  private tyNewBillInitData!: new_bill_init_data;
  private tyNewBillInitDataSource = new BehaviorSubject<new_bill_init_data>(this.tyNewBillInitData);
  tyNewBillInitDataSource$ = this.tyNewBillInitDataSource.asObservable();

  getNewBillInitData(): void {
    this.http.get<ty_api_get_new_bill_init_data>(`${this.apiUrl}/tywebapp/bill/get-new-bill-init-value`).subscribe({
      next: (response: ty_api_get_new_bill_init_data) => {
        if (response.success) {
          this.tyNewBillInitData = response.data;
          this.tyNewBillInitDataSource.next(this.tyNewBillInitData);
          //console.log(JSON.stringify(this.tyNewBillInitData));
        } else {
          console.log('No logs found or request failed');
        }
      },
      error: (error) => {
        console.error('Error fetching logs:', error);
      },
    });
  }

  getTestingStatus(): boolean {
    return this.isTesting;
  }

  private project_preview_data!: ty_api_projects_preview_response_data;
  private project_preview_data_source = new BehaviorSubject<ty_api_projects_preview_response_data>(this.project_preview_data);
  project_preview_data_source$ = this.project_preview_data_source.asObservable();

  getProjectPreviewData(): void {
    this.http.get<ty_api_get_projects_preview>(`${this.apiUrl}/projects/get-projects-preview-data`).subscribe({
      next: (response: ty_api_get_projects_preview) => {
        if (response.success) {
          this.project_preview_data = response.data;
          this.project_preview_data_source.next(this.project_preview_data);
          //console.log(JSON.stringify(this.project_preview_data));
        } else {
          console.log('No project preview data found or request failed');
        }
      },
      error: (error) => {
        console.error('Error fetching project preview data:', error);
      },
    });
  }
}

