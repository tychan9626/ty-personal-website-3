import { Component } from '@angular/core';
import { V4HomeHeaderComponent } from "../header/header.component";
import { V4HomeHeroComponent } from "../sections/hero/hero.component";
import { V4HomeWorkExperienceComponent } from "../sections/work-experience/work-experience.component";
import { V4HomeTechnicalSkillsComponent } from "../sections/technical-skills/technical-skills.component";
import { V4HomeOtherSkillsComponent } from "../sections/other-skills/other-skills.component";
import { V4HomeSoftwareProjectsComponent } from "../sections/software-projects/software-projects.component";
import { V4HomeDesignProjectsComponent } from "../sections/design-projects/design-projects.component";
import { V4HomeEducationComponent } from "../sections/education/education.component";
import { V4HomeContactMeComponent } from "../sections/contact-me/contact-me.component";
import { V4HomeFooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-v4-home-layout',
  standalone: true,
  imports: [V4HomeHeaderComponent, V4HomeHeroComponent, V4HomeWorkExperienceComponent, V4HomeTechnicalSkillsComponent, V4HomeOtherSkillsComponent, V4HomeSoftwareProjectsComponent, V4HomeDesignProjectsComponent, V4HomeEducationComponent, V4HomeContactMeComponent, V4HomeFooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class V4HomeLayoutComponent {

}
