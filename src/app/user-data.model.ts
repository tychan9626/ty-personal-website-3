
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
  descKey0?: string;
  descKey1?: string;
  descKey2?: string;
  descKey3?: string;
  descKey4?: string;
  descKey5?: string;
  descKey6?: string;
  descKey7?: string;
  descKey8?: string;
  descKey9?: string;
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


export interface technicalSkillsDetails {
  name: string;
  skills: string[];
}

export interface technicalSkills {
  displayCode: string;
  technicalSkillsDetails: technicalSkillsDetails[];
}


export interface version {
  major: number;
  minor: number;
  patch?: number;
}

export interface log {
  category: string;
  date: string;
  version: version;
  is_critical: boolean;
  description: string[];
}

export interface tySectionLog {
  page_log_title: string,
  display_mode: string;
  logs: log[];
}

export interface tyApiResponseSectionLog {
  success: boolean;
  data: tySectionLog;
}

export interface currency {
  tb_tyapp_crny_id: string;
  code: string;
}

export interface wallet {
  tb_tyapp_wlt_id: string;
  user_id: string;
  display_name: string;
  currency_id: string;
}

export interface unit {
  tb_tyapp_unt_id: string;
  code: string;
}

export interface tyNewBillInitData {
  users: user[];
  currencies: currency[];
  wallets: wallet[];
  units: unit[];
  billTitles: string[];
  billItemsTitleEn: string[];
  billItemsTitleZh: string[];
}

export interface tyApiResponseGetNewBillInitData {
  success: boolean;
  data: tyNewBillInitData;
}

export interface user {
  id: string;
  display_name: string;
}

export interface tyApiResponseUserData {
  success: boolean;
  data: user;
  message: string;
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


  credit: credit;
}
