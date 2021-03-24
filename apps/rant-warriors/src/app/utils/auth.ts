import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class AuthService {
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {    
  }

  public async canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const promise = new Promise<boolean>(resolve => {
      this.fireAuth.authState.subscribe(async user => {
        if (user) {
          if (state.url === "/admin") {
            resolve(await this.checkForAdmin(user));
          } else {
            resolve(true);
          }
        } else if (state.url === "/") {
          resolve(true);
        } else {
          this.router.navigate(["/"]);
          resolve(false);
        }

      })
    });
    return promise;
  }

  public async checkForAdmin(user): Promise<boolean> {
    return new Promise(resolve => {
      this.firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .subscribe(snapshot => {
          debugger
          // if (snapshot.data.admin) {
          //   resolve(true);
          // } else {
          //   this.router.navigate(["/landing"])
          //   resolve(false);
          // }
        });
    });
  }
}
