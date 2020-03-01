import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public message = "";
  public username = "";
  public displayName = "";
  public password = "";
  public rewritePassword = "";
  public isLogin = false;
  public isCreateAccount = false;
  public loggingIn = false;
  public loading = true;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {

  }

  public async ngOnInit(): Promise<void> {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigateByUrl("/creature");
      } else {
        setTimeout(() => {
          this.loading = false;
        })
      }
    });
  }

  public openCreateAccountView(): void {
    this.isCreateAccount = true;
    this.isLogin = false;
    this.reset();
  }

  public openLoginView(): void {
    this.isLogin = true;
    this.isCreateAccount = false;
    this.reset();
  }

  public createAccount(): void {
    this.loggingIn = true;
    const passwordsMatch = this.password === this.rewritePassword;
    if (!passwordsMatch) {
      this.message = "Passwords do not match";
      return;
    }

    if (this.username.length <= 4) {
      this.message = "Username Length Must Be 5 Characters";
      return;
    }

    if (this.username && this.password) {
      this.fireAuth.auth
        .createUserWithEmailAndPassword(this.username, this.username)
        .catch(error => {
          this.message = `${error.code} ---- ${error.message}`;
        })
        .finally(() => {
          this.loggingIn = false;
        })
        .then(user => {
          this.fireAuth.auth.currentUser.updateProfile({
            displayName: this.displayName
          });
          this.router.navigateByUrl("/creature");
        });
    } else {
      this.message = "Username and Password are Required";
    }
  }

  public login(): void {
    this.fireAuth.auth
      .signInWithEmailAndPassword(this.username, this.username)
      .catch(error => {
        this.message = `${error.code} ---- ${error.message}`;
      })
      .then(user => {
        if (user) {
          this.router.navigateByUrl("/creature");
        } else {
          this.message = "Username or Password is incorrect.";
        }
      });
  }

  public sendMessage(): void {}

  public reset() {
    this.message = "";
    this.username = "";
    this.displayName = "";
    this.password = "";
    this.rewritePassword = "";
  }

  public clickMe(): void {
    debugger
    this.loading = false;
  }
}
