import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environment/environment';
import { SharedDataService } from '../../../shared-data.service';
import { version } from '../../../user-data.model';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})

export class PanelComponent {
  category: string = 'Frontend';
  customCategory: string = '';
  date: string = this.getTodayDate();
  version: version = { major: 1, minor: 0, patch: 0 };
  is_critical: boolean = false;
  descriptionText = '';

  allDisplaycategories = [''];
  latestVersionByCategorySubject: { [key: string]: version } = {};

  private apiUrl = environment.apiUrl;

  responseMessage: string = '';

  constructor(private router: Router, private http: HttpClient, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.logsByCategory$.subscribe(logs => {
      this.allDisplaycategories = Object.keys(logs);  // 更新分類
    });
    this.sharedDataService.latestVersionByCategory$.subscribe(versions => {
      this.latestVersionByCategorySubject = versions;
      this.updateVersionForCategory();
    });
  }

  goBack(): void {
    this.router.navigate(['tywebapp/menu']);
  }

  onCategoryChange(category: string): void {
    if (category !== 'Other') {
      this.customCategory = '';
      this.category = category;
    } else {
      this.version = { major: 1, minor: 0, patch: 0 };
    }
    this.updateVersionForCategory();
  }

  updateVersionForCategory(): void {
    const currentVersion = this.latestVersionByCategorySubject[this.category];
    if (currentVersion) {
      this.version = {
        major: currentVersion.major,
        minor: currentVersion.minor + 1,
        patch: 0
      };
    } else {
      this.version = { major: 1, minor: 0, patch: 0 };
    }
  }

  onOtherInputChange(): void {
    if (this.customCategory && this.customCategory.trim() !== '') {
      this.customCategory = 'Other';
    }
  }

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 月份補零
    const day = today.getDate().toString().padStart(2, '0'); // 日期補零
    return `${year}-${month}-${day}`;
  }

  submitForm(): void {
    this.responseMessage = '';
    const descriptionArray = this.descriptionText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== '');

    const payload = {
      category: this.category === 'Other' ? this.customCategory : this.category,
      date: this.date,
      version: this.version,
      is_critical: this.is_critical,
      description: descriptionArray,
    };

    this.http.post(`${this.apiUrl}/tySectionLog`, payload).subscribe({
      next: (response) => {
        this.responseMessage = 'Log created successfully!';
        this.router.navigate(['tywebapp/cms/panel']);
      },
      error: (error) => {
        this.responseMessage = 'Error creating log.';
      },
    });
  }

}
