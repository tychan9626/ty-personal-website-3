import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  testData: any;
  bIsLoading: boolean = false;
  iCountSecond: number = 0;
  sloadingMessage: string = '';
  intervalId: any;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.bIsLoading = true;
    this.startTimer();
    this.sharedDataService.getRenderTestData().subscribe(
      (response) => {
        if (response && response.length > 0) {
          this.testData = response;
          this.bIsLoading = false;
          this.stopTimer();
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.bIsLoading = false;
      }
    );
  }

  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: 'https://lottie.host/93646095-8865-4ac1-9f70-d48d260d2f77/GH9zkTdVBN.json',
    loop: true,
    autoplay: true
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  // 开始计时器
  startTimer() {
    this.iCountSecond = 0;
    this.intervalId = setInterval(() => {
      this.iCountSecond++;
    }, 1000); // 每隔 1 秒增加一次
  }

  // 停止计时器
  stopTimer() {
    clearInterval(this.intervalId);
  }

  ngOnDestroy(): void {
    // 清理计时器，防止内存泄漏
    this.stopTimer();
  }
}
