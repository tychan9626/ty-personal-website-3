import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './secret-space/login/login.component';
import { AuthGuard } from './auth.guard';
import { TyloginComponent } from './tywebapp/tylogin/tylogin.component';
import { PanelComponent } from './tywebapp/cms/panel/panel.component';
import { NewBillComponent } from './tywebapp/bill/new-bill/new-bill.component';
import { TyMenuComponent } from './tywebapp/menu/menu.component';
import { CityugeDeisgnComponent } from './special/cityuge-deisgn/cityuge-deisgn.component';
import { HknhaDeisgnComponent } from './special/hknha-deisgn/hknha-deisgn.component';
import { LbwebDeisgnComponent } from './special/lbweb-deisgn/lbweb-deisgn.component';
import { TywebDeisgnComponent } from './special/tyweb-deisgn/tyweb-deisgn.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'log', component: LogComponent },
  { path: 'llIIlIlIllIIIlIllIlIl/login', component: LoginComponent },
  { path: 'tylogin', component: TyloginComponent },
  { path: 'tywebapp/menu', component: TyMenuComponent, canActivate: [AuthGuard] },
  { path: 'tywebapp/cms/panel', component: PanelComponent, canActivate: [AuthGuard] },
  { path: 'tywebapp/bill/new-bill', component: NewBillComponent, canActivate: [AuthGuard] },
  { path: 'proj/cityucg', component: CityugeDeisgnComponent },
  { path: 'proj/hknha', component: HknhaDeisgnComponent },
  { path: 'proj/0xblanc', component: LbwebDeisgnComponent },
  { path: 'proj/tyweb', component: TywebDeisgnComponent },
  { path: '**', component: PageNotFoundComponent }
];
