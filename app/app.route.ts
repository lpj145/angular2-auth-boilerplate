import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard.service';

import { SideBarComponent } from './menu/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashBoardComponent, canActivate: [AuthGuard] },
  { path: 'side', component: SideBarComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: ''}

];

export const appRoutingProviders: any[] = [
       AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
