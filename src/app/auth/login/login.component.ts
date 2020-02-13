import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private toastr: ToastrService,
    private authSrv: AuthService,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
  ) { }

  ngOnInit() {
    // 
  }

  // async onSubmit(credentials) {
  //   console.log(credentials);
  // }

  async onSubmit(user) {
    console.log('here');
    console.log(user);
    this.submitted = true;
    await this.authSrv.loginAccount(user)
      .pipe(first())
      .subscribe(res => {
        console.log(res);
        // if (res.status) {
        //   this.toastr.success(`Login Successful`);
        //   this.router.navigateByUrl('/dashboard');
        //   this.storage.set('data', res.message);
        // } else {
        //   this.toastr.error(`Something went wrong!!!`);
        // }
        this.authSrv.setLoggedSubject(true);
        this.toastr.success(`Login Successful`);
        this.storage.set('data', res.data);
        this.router.navigateByUrl('/dashboard');
        this.submitted = false;
      }, err => {
        // console.log(err);
        this.toastr.error(`${err.error.message}`);
        this.submitted = false;
      })
  }

}
