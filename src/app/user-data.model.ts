
export interface userImg {
  regular: string;
  banner: string;
}

export interface navLink {
  linkURL: string;
  displayName: string;
}

export interface description {
  text: string;
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

export interface skillsSet {
  title: string;
  items: string[];
}

export interface skillsList {
  displayCode: string;
  skillsSet: skillsSet[];
}

export interface summary {
  displayCode: string;
  description: description[];
}

export interface workExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: summary;
  skillsList: skillsList;
}

export interface softwareProjects {
  displayCode: string;
  name: string;
  description: string[];
  skills: string[];
  link: string;
  screenCaptureLinks: string[];
}

export interface education {
  displayCode: string;
  name: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string[];
  featuredCourses: string[];
  otherCourses: string[];
}

export interface logDetails {
  version: string;
  date: string;
  description: string[];
  critical: boolean;
}

export interface technicalSkillsDetails {
  name: string;
  skills: string[];
}

export interface technicalSkills {
  displayCode: string;
  technicalSkillsDetails: technicalSkillsDetails[];
}

export interface log {
  displayCode: string;
  logDetails: logDetails[];
}

export interface UserData {
  userLegalFirstName: string;
  userLegalLastName: string;
  userPreferredFirstName: string;
  userDisplayName: string;
  userImg: userImg;

  internalNavLink: navLink[];
  otherPagesNavLink: navLink[];
  externalNavLink: navLink[];

  userSummary: string;

  workExperience: workExperience[];

  softwareProjects: softwareProjects[];

  education: education[];

  technicalSkills: technicalSkills;

  log: log;
}
