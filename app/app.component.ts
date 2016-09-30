import { Component, OnInit } from '@angular/core';

import { tokenConfig } from './config/token';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent  {
  private users: Array<string>;
  constructor(private auth: AuthService){}

  ngOnInit() {
    this.submit();
  }


  submit() {
    if (localStorage.getItem( tokenConfig.localStorageName )) {
      console.log('Você já esta logado!!!!');
      this.auth.getUsers().subscribe(x => this.users = x.users);
    } else {
      this.auth._login(
        "user",
        "passwd"
      );
    }
  }

}
