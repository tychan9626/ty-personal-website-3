import { Injectable } from '@angular/core';
import { UserData, description } from './user-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
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
      { linkURL: '#work_experience', displayName: 'Work Experience' },
      { linkURL: '#software_projects', displayName: 'Software Projects' },
      { linkURL: '#education', displayName: 'Education' },
      { linkURL: '#technical_skills', displayName: 'Technical Skills' },
      { linkURL: '#contact_me', displayName: 'Contact Me' },
    ],
    otherPagesNavLink: [
      {
        linkURL: '/log',
        displayName: 'Website log',
      },
    ],
    externalNavLink: [
      { linkURL: 'https://github.com/tychan9626', displayName: 'GitHub' },
      {
        linkURL: 'https://www.linkedin.com/in/ty-chan-192b681a5/',
        displayName: 'LinkedIn',
      },
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
              text: "Reduced the speed of loading patient's allergy information in Prescription Information System by 60% through revamping key components for reading patients' data from the government's API.",
              highlightLine0: 'text-dark',
              highlightLine1: 'bg-light',
              highlightLine2: 'job-sth-feature-1.png',
              highlightLine3: 'Loading speed reduced by 60% for patient data',
              highlightLine4: '', //Details
              highlightLine5: '', ///feature/sth-reduce-load-speed
              highlightLine6: '',
              highlightLine7: '',
              highlightLine8: '',
              highlightLine9: '',
            },
            {
              text: 'Redesigned the backup and local database solution used in the Pharmacy for reducing manual interventions during server outages by implementing automatic data and database schema synchronization with the central server.',
              highlightLine0: 'text-dark',
              highlightLine1: 'bg-light',
              highlightLine2: 'job-sth-feature-2.png',
              highlightLine3: 'Automatic database synchronization',
              highlightLine4: '', //Details
              highlightLine5: '', ///feature/sth-sync-db
              highlightLine6: '',
              highlightLine7: '',
              highlightLine8: '',
              highlightLine9: '',
            },
            {
              text: 'Integrated Lexicomp modules into Doctor, Pharmacy, and Ward Systems, providing real-time comprehensive drug data that empowered over 200 medical staffs to make more informed decisions.',
              highlightLine0: 'text-dark',
              highlightLine1: 'bg-light',
              highlightLine2: 'job-sth-feature-3.png',
              highlightLine3: 'Integrated modules for 200 medical staffs',
              highlightLine4: '',
              highlightLine5: '',
              highlightLine6: '',
              highlightLine7: '',
              highlightLine8: '',
              highlightLine9: '',
            },
          ]
        },
        skillsList: {
          displayCode: 'dp11', skillsSet: [
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
          displayCode: 'dp02', description: [
            {
              text: "Reduced manual workload for 70% in handling client FTP requests by developing and deploying a Java-based FTP automation solution which structured and executed commands based on client requirements, streamlining the process.",
              highlightLine0: 'text-dark',
              highlightLine1: 'bg-light',
              highlightLine2: '',
              highlightLine3: '',
              highlightLine4: '',
              highlightLine5: '',
              highlightLine6: '',
              highlightLine7: '',
              highlightLine8: '',
              highlightLine9: '',
            },
            {
              text: "Led the migration of 120 users' PCs, ensuring minimal downtime through an efficient process.",
              highlightLine0: 'text-dark',
              highlightLine1: 'bg-light',
              highlightLine2: '',
              highlightLine3: '',
              highlightLine4: '',
              highlightLine5: '',
              highlightLine6: '',
              highlightLine7: '',
              highlightLine8: '',
              highlightLine9: '',
            },
            {
              text: "Improved collaboration efficiency by 30% during the pandemic through provided technical guidance and created tutorials for using remote computing and video conferencing tools.",
              highlightLine0: 'text-dark',
              highlightLine1: 'bg-light',
              highlightLine2: '',
              highlightLine3: '',
              highlightLine4: '',
              highlightLine5: '',
              highlightLine6: '',
              highlightLine7: '',
              highlightLine8: '',
              highlightLine9: '',
            },
          ]
        },
        skillsList: {
          displayCode: 'dp12', skillsSet: [
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
        displayCode: 'dp22',
        name: 'TY Personal Website ',
        description: [
          "<b>Responsive and Adaptive Design</b>: <br>Created a modern personal website that adapts to various screen sizes, with optimized layouts and transitions for both wide and small screens. Enhanced user experience with dynamic animations and smooth, layered gradient effects.",
          "<b>Frontend Development with Angular and Bootstrap</b>: <br>Built using Angular for modular component management and Bootstrap’s grid system for responsive styling. Customized CSS animations and media queries to ensure seamless visual consistency across devices.",
          "<b>Backend Integration and API Handling</b>: <br>Integrated with Node.js for efficient form handling and API calls, with potential MongoDB backend support for dynamic data management."
        ],
        skills: [
          '<b>Frontend</b>: <br>Angular, TypeScript, HTML, CSS, Bootstrap',
          '<b>Backend</b>: <br>Node.js (for form handling and API integration)',
          '<b>Database</b>: <br>MongoDB (Dynamically access and modify personal data)',
          '<b>Design and Styling</b>: <br>CSS animations, media queries for adaptive layouts, Bootstrap’s grid system for responsive behavior'
        ],
        link: 'https://github.com/tychan9626/AI-powered-Video-Super-Resolution-Tool-based-on-Convolutional-Neural-Network',
        screenCaptureLinks: [
          'proj-personal-website-home-page.png',
          'proj-personal-website-home-page2.png'
        ],
      },
      {
        displayCode: 'dp22',
        name: 'AI-powered Video Super Resolution Tool based on Convolutional Neural Network (CNN)',
        description: [
          "Utilizing the Image Super-Resolution Using Deep Convolutional Networks (SR-CNN) algorithm to upscale low-resolution videos into high definition. Integrated deep learning techniques to enhance image clarity, reduce noise, and restore fine details, resulting in sharper and more realistic outputs.",
          "Supported a wide range of video formats; offered customizable settings, enabling users to adjust resolution, processing intensity, and output quality based on their specific requirements."
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
          "Implemented game mechanics that followed official Big 2 rules, including card ranking, turn logic, and winning conditions.",
          "Integrated error handling and validation to ensure only valid moves are allowed, enhancing the stability and user experience of the game."
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
    log: {
      displayCode: 'dp41',
      logDetails: [
        {
          version: '3.2',
          date: '2024-10-30',
          description: [
            'Update footer to retrive last update version and datetime from log.',
            'Update footer and log page time format to yyyy-MM-dd.',
            'Update home page banner large and banner small image.',
            'Add @media max width 992px for banner display setting changes.',
          ],
          critical: false,
        },
        {
          version: '3.1',
          date: '2024-10-29',
          description: [
            'Update website content (footer, nav-bar, and sofware projects).',
          ],
          critical: false,
        },
        {
          version: '3.0',
          date: '2024-10-24',
          description: [
            'Rewrite website with Angular 18.',
            'Defined structured first before migrating content from old project.',
            'Include website routing.',
            'Include website update log accessable from nav-bar.',
            'Restrict data can be accessed from shared data service file only.',
            'Include observable in shared data service file.',
            'Commit project codes to GitHub.',
          ],
          critical: true,
        },
        {
          version: '2.2',
          date: '2024-10-10',
          description: [
            'Move variables to shared data service file.',
            'Add components nav-bar, footer.',
            'Include website update log.',
          ],
          critical: false,
        },
        {
          version: '2.1',
          date: '2024-10-3',
          description: [
            'Create shared data service file in Angular for sharing data between components.',
            'Split components into separate files.',
            'Update website icon.',
          ],
          critical: false,
        },
        {
          version: '2.0',
          date: '2024-9-28',
          description: [
            'Rewrite website with Angular 18.',
            'Commit project codes to GitHub.',
            'Build website with Angular CLI and deploy to Cloudflare.',
          ],
          critical: true,
        },
        {
          version: '1.5',
          date: '2024-9-15',
          description: ['Website content updated.'],
          critical: false,
        },
        {
          version: '1.4',
          date: '2024-9-7',
          description: [
            'Website content updated.',
            'Include diagrams for software projects.',
          ],
          critical: false,
        },
        {
          version: '1.3',
          date: '2024-9-2',
          description: ['Website content updated.'],
          critical: false,
        },
        {
          version: '1.2',
          date: '2024-8-27',
          description: ['Website content updated.'],
          critical: false,
        },
        {
          version: '1.1',
          date: '2024-8-26',
          description: ['Website content updated.', 'Website styles updated.'],
          critical: false,
        },
        {
          version: '1.0',
          date: '2024-8-20',
          description: [
            'Initial version.',
            'Website developed with Google Sites.',
            'Domain purchased, and hosted on Cloudflare.',
          ],
          critical: true,
        },
      ]
    },
  };

  private userDataSource = new BehaviorSubject<UserData>(this.userData);
  userData$ = this.userDataSource.asObservable();

  constructor() { }
}
