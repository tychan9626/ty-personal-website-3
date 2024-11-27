import { Component } from '@angular/core';
import { log, user, version } from '../../../user-data.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../../../shared-data.service';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environment/environment';


interface Log {
  _id?: string; // Optional, MongoDB generates it
  category: string;
  customCategory?: string; // For "Other" category
  date: string;
  version: version;
  is_critical: boolean;
  description: string[];
}

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})

export class PanelComponent {
  user!: user;
  categories = [''];
  log: Log = {
    _id: '',
    category: '',
    date: this.getTodayDate(),
    version: { major: 0, minor: 0, patch: 0 },
    is_critical: false,
    description: [],
  };
  latestVersionByCategorySubject: { [key: string]: version } = {};
  updatedVersion: version | null = null;
  selectedCategory = 'Frontend';
  private apiUrl = environment.apiUrl;

  descriptionText = '';

  constructor(private router: Router, private http: HttpClient, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    this.sharedDataService.logsByCategory$.subscribe(logs => {
      this.categories = Object.keys(logs);  // 更新分類
    });
    this.sharedDataService.latestVersionByCategory$.subscribe(versions => {
      this.latestVersionByCategorySubject = versions;
      this.updateVersionForCategory();
    });
  }

  logout() {
    localStorage.clear();
    console.log('Local Storage 已全局清除');
    this.router.navigate(['cms/']);
  }

  onCategoryChange(category: string): void {
    if (category !== 'Other') {
      this.log.customCategory = '';
      this.selectedCategory = category;
      this.updateVersionForCategory();
    } else {
      this.log.version = { major: 0, minor: 0, patch: 0 }; // Reset version
    }
  }

  updateVersionForCategory(): void {
    const currentVersion = this.latestVersionByCategorySubject[this.selectedCategory];
    if (currentVersion) {
      // 若有版本數據，更新並加上 minor+1
      this.updatedVersion = {
        ...currentVersion,
        minor: currentVersion.minor + 1,
      };
    } else {
      // 若無版本數據，初始化一個默認版本
      this.updatedVersion = { major: 1, minor: 0, patch: 0 };
    }
  }

  onOtherInputChange(): void {
    if (this.log.customCategory && this.log.customCategory.trim() !== '') {
      this.log.category = 'Other';
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
    const descriptionArray = this.descriptionText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== '');

    const payload = {
      ...this.log,
      category: this.log.category === 'Other' ? this.log.customCategory : this.log.category,
      description: descriptionArray,
    };

    this.http.post(`${this.apiUrl}/tySectionLog`, payload).subscribe({
      next: (response) => {
        console.log('Log created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating log:', error);
      },
    });
  }

}
