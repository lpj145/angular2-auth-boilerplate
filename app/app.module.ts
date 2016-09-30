import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';

import { AUTH_PROVIDERS }          from 'angular2-jwt';
import { DashBoard } from './dashboard/dashboard.module';
import { AuthService } from './auth/auth.service';
import { routing, appRoutingProviders } from './app.route';

@NgModule({
  imports:      [
    CommonModule,
    BrowserModule,
    HttpModule,
    DashBoard,
    routing
  ],
  declarations: [ AppComponent, LoginComponent ],
  providers: [ AuthService, AUTH_PROVIDERS, appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
