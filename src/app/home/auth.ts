import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  public async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const promise = new Promise<boolean>(resolve =>
      this.fireAuth.auth.onAuthStateChanged(user => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigateByUrl("");
        }
      })
    );
    return promise;
  }
}
