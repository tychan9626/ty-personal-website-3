
export interface userImg {
  regular: string;
  banner: string;
}

export interface navLink {
  url: string;
  displayName: string;
}

export interface description {
  desc: string;
  descKey0: string;
  descKey1: string;
  descKey2: string;
  descKey3: string;
  descKey4: string;
  descKey5: string;
  descKey6: string;
  descKey7: string;
  descKey8: string;
  descKey9: string;
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
  description: description[];
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

export interface creditDetails {
  title: string;
  info: string;
  active: boolean;
  remarks: string;
}

export interface credit {
  displayCode: string;
  creditDetails: creditDetails[];
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

  credit: credit;
}

export interface testRenderApi {
  message: string;
}
