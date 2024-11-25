import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ty-personal-website-3';

  constructor(private sharedDataService: SharedDataService) { }
  ngOnInit(): void {
    window.addEventListener('beforeunload', this.clearLocalStorage);
    this.sharedDataService.connectTySectionLog();
  }

  ngOnDestroy(): void {
    // 確保事件監聽器被清理
    window.removeEventListener('beforeunload', this.clearLocalStorage);
  }

  clearLocalStorage(): void {
    localStorage.clear();
    console.log('Local Storage 已全局清除');
  }
}
