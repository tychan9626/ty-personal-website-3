export interface navLink {
    linkURL: string;
    displayName: string;
}

export interface description {
    text: string;
    highlightType: string;
    highlightLine0: string;
    highlightLine1: string;
    highlightLine2: string;
    highlightLine3: string;
    highlightLine4: string;
    highlightLine5: string;
    highlightLine6: string;
    highlightLine7: string;
    highlightLine8: string;
    highlightLine9: string;
}

export interface workExperience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    summary: description[];
    knowledge1: string[]; //Max 6 knowledge.
    knowledge2: string[]; //Max 6 knowledge.
    knowledge3: string[]; //Max 6 knowledge.
    skills1: string[]; //Max 6 skills.
    skills2: string[]; //Max 6 skills.
    skills3: string[]; //Max 6 skills.
}

export interface softwareProjects {
    name: string;
    description: string[];
    skills: string[];
    link: string;
    screenCaptureLinks: string[];
}

export interface education {
    name: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    summary: string[];
    featuredCourses: string[];
    otherCourses: string[];
}

export interface log {
    version: string;
    date: string;
    description: string[];
    critical: boolean;
}

export interface UserData {
    userLegalFirstName: string;
    userLegalLastName: string;
    userPreferredFirstName: string;
    userDisplayName: string;

    internalNavLink: navLink[];
    otherPagesNavLink: navLink[];
    externalNavLink: navLink[];

    userSummary: string;

    workExperience: workExperience[];

    softwareProjects: softwareProjects[]

    education: education[];

    technicalSkills: string[];

    log: log[];
}