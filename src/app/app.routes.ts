import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PanelComponent } from './v3/tywebapp/cms/panel/panel.component';
import { NewBillComponent } from './v3/tywebapp/bill/new-bill/new-bill.component';
import { TyMenuComponent } from './v3/tywebapp/menu/menu.component';
import { PageNotFoundComponent } from './v3/common/page-not-found/page-not-found.component';
import { ProjectsHomepageComponent } from './v3/special/projects-homepage/projects-homepage.component';
import { LayoutComponent } from './v3/layout/layout.component';
import { HomeComponent } from './v3/home/home.component';
import { LogComponent } from './v3/log/log.component';
import { LoginComponent } from './v3/secret-space/login/login.component';
import { CityugeDeisgnComponent } from './v3/special/cityuge-deisgn/cityuge-deisgn.component';
import { HknhaDeisgnComponent } from './v3/special/hknha-deisgn/hknha-deisgn.component';
import { LbwebDeisgnComponent } from './v3/special/lbweb-deisgn/lbweb-deisgn.component';
import { TywebDeisgnComponent } from './v3/special/tyweb-deisgn/tyweb-deisgn.component';
import { TyloginComponent } from './v3/tywebapp/tylogin/tylogin.component';
import { V4HomeLayoutComponent } from './v4/home/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'log', component: LogComponent },
      { path: 'llIIlIlIllIIIlIllIlIl/login', component: LoginComponent },
      { path: 'tylogin', component: TyloginComponent },
      { path: 'tywebapp/menu', component: TyMenuComponent, canActivate: [AuthGuard] },
      { path: 'tywebapp/cms/panel', component: PanelComponent, canActivate: [AuthGuard] },
      { path: 'tywebapp/bill/new-bill', component: NewBillComponent, canActivate: [AuthGuard] },
      { path: 'proj', component: ProjectsHomepageComponent },
      { path: 'proj/cityucg', component: CityugeDeisgnComponent },
      { path: 'proj/hknha', component: HknhaDeisgnComponent },
      { path: 'proj/0xblanc', component: LbwebDeisgnComponent },
      { path: 'proj/tyweb', component: TywebDeisgnComponent },
    ]
  },
  {
    path: 'v4',
    component: V4HomeLayoutComponent
  },
  { path: '**', component: PageNotFoundComponent },
];
