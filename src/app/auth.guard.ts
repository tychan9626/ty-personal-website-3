import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  testing: boolean = false;

  constructor(private router: Router) { }

  canActivate(): boolean {
    // 檢查 localStorage 中是否有用戶資料，沒有則跳轉到登入頁面
    const user = localStorage.getItem('user');
    if (user || this.testing) {
      return true;
    } else {
      this.router.navigate(['cms']);
      return false;
    }
  }
}
