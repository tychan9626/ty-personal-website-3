import { Component } from '@angular/core';
import { project_preview, ty_api_projects_preview_response_data } from '../../user-data.model';
import { SharedDataService } from '../../shared-data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects-homepage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './projects-homepage.component.html',
  styleUrl: './projects-homepage.component.css'
})
export class ProjectsHomepageComponent {
  page_title: string = '';
  display_mode: string = '';
  all_design_projects_preview: project_preview[] = [];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.project_preview_data_source$.subscribe({
      next: (data: ty_api_projects_preview_response_data) => {
        if (data) {
          this.page_title = data.page_title;
          this.display_mode = data.display_mode;
          this.all_design_projects_preview = data.all_design_projects_preview;

        } else {
          console.log('No data available in sharedDataService');
        }
      },
      error: (error) => {
        console.error('Error fetching project data:', error);
      },
    });
  }

  navigateURL(url: string) {
    window.open(url, '_blank');
  }

}
