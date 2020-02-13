import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedSubject: BehaviorSubject<boolean>;
  public isLogged: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
  ) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.storage.get('data'));
    this.isLogged = this.isLoggedSubject.asObservable();
  }

  public get currentLoggedValue(): boolean {
    if (this.isLoggedSubject.value) {
      return true;
    }
    return false;
  }
  
  public setLoggedSubject(boolean) {
    console.log(boolean);
    this.isLoggedSubject.next(boolean);
  }

  loginAccount(userData): Observable<any> {
    console.log(userData);
    const username = userData.username;
    const password = userData.password;
    return this.http.post(environment.base_uri + `auth/login`, { username, password }).pipe(
      map(res => {
        // if (res['status']) {
        //   this.isLoggedSubject.next(true);
        // }
        return res;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    this.storage.remove('data');
    this.isLoggedSubject.next(false);
    this.router.navigateByUrl('/home');
    // location.reload();
  }
}
