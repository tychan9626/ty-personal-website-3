import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { user } from '../../user-data.model';

@Component({
  selector: 'app-tymenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class TyMenuComponent {
  user!: user;
  tyWebAppLinks = [
    { url: '/tywebapp/cms/panel', displayName: 'CMS panel' },
    { url: '/tywebapp/bill/new-bill', displayName: 'New bill' },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout() {
    localStorage.clear();
    console.log('Local Storage 已全局清除');
    this.router.navigate(['tylogin']);
  }
}
