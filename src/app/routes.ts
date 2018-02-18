import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewmilestoneComponent } from './newmilestone/newmilestone.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './core/auth.guard';

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'newmilestone', component: NewmilestoneComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
