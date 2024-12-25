import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { SharedDataService } from './v3/shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (this.sharedDataService.getTestingStatus()) {
      return true;
    } else {
      if (user) {
        return true;
      } else {
        this.router.navigate(['tylogin']);
        return false;
      }
    }

  }
}
