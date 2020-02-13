import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private authSrv: AuthService,
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authSrv.currentLoggedValue;
    console.log(this.isLoggedIn);
  }

  logout() {
    this.authSrv.logout();
  }

}
