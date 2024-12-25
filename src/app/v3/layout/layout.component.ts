import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit, OnDestroy {
  title = 'ty-personal-website-3';

  constructor(private sharedDataService: SharedDataService) { }
  ngOnInit(): void {
    if (!this.sharedDataService.getTestingStatus()) {
      window.removeEventListener('beforeunload', this.clearLocalStorage);
    }
    this.sharedDataService.connectTySectionLog();
    this.sharedDataService.getNewBillInitData();
    this.sharedDataService.getProjectPreviewData();
  }

  ngOnDestroy(): void {
    if (!this.sharedDataService.getTestingStatus()) {
      window.removeEventListener('beforeunload', this.clearLocalStorage);
    }
  }

  clearLocalStorage(): void {
    localStorage.clear();
    console.log('Local Storage 已全局清除');
  }
}
