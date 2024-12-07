import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

  countdown = 5;
  private animationItem: AnimationItem | undefined;

  // options: AnimationOptions = {
  //   path: 'https://lottie.host/embed/b0b9d990-253e-49d8-9d34-bd3c7d6adf99/JpxDKkuf4c.json',
  //   loop: true,
  //   autoplay: true
  // };

  // animationCreated(animationItem: AnimationItem): void {
  //   this.animationItem = animationItem;
  // }


  constructor(private router: Router) { }

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.countdown -= 1;
      if (this.countdown === 0) {
        clearInterval(interval);
        this.router.navigate(['/']); // 跳转到主页
      }
    }, 1000);
  }

}
