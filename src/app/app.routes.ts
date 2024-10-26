import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'log', component: LogComponent },
];
