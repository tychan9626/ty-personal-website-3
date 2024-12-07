import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-loading-page',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.css'
})
export class LoadingPageComponent {
  private iCountSecond: number = 0;
  sLoadingMessage: string = '';
  private intervalId: any;

  private animationItem: AnimationItem | undefined;

  constructor() { }

  options: AnimationOptions = {
    path: 'https://lottie.host/e7eef8f9-1afe-41fa-af06-a6345a8c4ce5/Z2WeI8lCwB.json',
    loop: true,
    autoplay: true
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }



}
