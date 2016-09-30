import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { _AUTH } from '../config/authorized';

@Injectable()
export class AuthGuard  {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth._logged) {
      //todo...
      this.router.navigate([ _AUTH.loginRedirectTo ]);
    } else {
      this.router.navigate([ _AUTH.loginAction ]);
    }

    return this.auth._logged;
  }

}
