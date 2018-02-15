import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewmilestoneComponent } from './newmilestone/newmilestone.component';

export const router: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newmilestone', component: NewmilestoneComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
