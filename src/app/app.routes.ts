import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { SthReduceLoadSpeedComponent } from './feature/sth-reduce-load-speed/sth-reduce-load-speed.component';
import { SthSyncDbComponent } from './feature/sth-sync-db/sth-sync-db.component';
import { LoginComponent } from './secret-space/login/login.component';
import { TestComponent } from './secret-space/test/test.component';
import { AuthGuard } from './auth.guard';
import { TyloginComponent } from './tywebapp/cms/tylogin/tylogin.component';
import { PanelComponent } from './tywebapp/cms/panel/panel.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'log', component: LogComponent },
  { path: 'feature/sth-reduce-load-speed', component: SthReduceLoadSpeedComponent },
  { path: 'feature/sth-sync-db', component: SthSyncDbComponent },
  { path: 'llIIlIlIllIIIlIllIlIl/login', component: LoginComponent },
  { path: 'ctytest', component: TestComponent },
  { path: 'cms', component: TyloginComponent },
  { path: 'cms/panel', component: PanelComponent, canActivate: [AuthGuard] },
];
