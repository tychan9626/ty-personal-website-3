
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

//Shared interface - START
export interface user {
  id: string;
  display_name: string;
}

export interface currency {
  id: string;
  display_name: string;
}

export interface wallet {
  id: string;
  user_id: string;
  currency_id: string;
  display_name: string;
}

export interface unit {
  id: string;
  display_name: string;
}

//Shared interface - END




export interface ty_api_get_new_bill_init_data {
  success: boolean;
  data: new_bill_init_data;
}

export interface new_bill_init_data {
  all_users: user[];
  all_currencies: currency[];
  all_wallets: wallet[];
  all_units: unit[];
  all_bill_address_en: string[];
  all_bill_address_zh: string[];
  all_bill_organization_en: string[];
  all_bill_organization_zh: string[];
  all_bill_action: string[];
  all_bill_item_name_en: string[];
  all_Bill_item_name_zh: string[];
}

export interface bill_info {
  bill_user: user | null;
  address_en: string | null;
  address_zh: string | null;
  organization_en: string | null;
  organization_zh: string | null;
  action: string | null;
  date_time: string | null;
  bill_currency: currency | null;
  bill_subtotal: number | null;
  bill_tax: number | null;
  bill_tips: number | null;
  bill_payer: user | null;
  paid_wallet: wallet | null;
  paid_amount: number | null;
  remarks: string | null;
}

export interface submit_bill {
  bill_user_id: string;
  address_en: string | null;
  address_zh: string | null;
  organization_en: string | null;
  organization_zh: string | null;
  action: string | null;
  date_time: string | null;
  bill_currency_id: string | null;
  bill_subtotal: number | null;
  bill_tax: number | null;
  bill_tips: number | null;
  bill_payer_id: string | null;
  paid_wallet_id: string | null;
  paid_amount: number | null;
  bill_items: submit_bill_item[];
  remarks: string | null;
}


export interface bill_item {
  name_en: string | null;
  name_zh: string | null;
  amount: number | null;
  unit: unit | null;
  qty: number | null;
  description: string | null;
  price: number | null;
  tax: number | null;
  on_sale: boolean;
  private: boolean;
}

export interface submit_bill_item {
  name_en: string | null;
  name_zh: string | null;
  amount: number | null;
  unit_id: string | null;
  qty: number | null;
  description: string | null;
  price: number | null;
  tax: number | null;
  on_sale: boolean;
  private: boolean;
}
