

import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';


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
    public fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  public async ngOnInit(): Promise<void> {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(["/landing"]);
      } else {
        setTimeout(() => {
          this.loading = false;
        });
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

  public async createAccount(): Promise<void> {
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
      const user = await this.fireAuth.currentUser
      this.fireAuth.createUserWithEmailAndPassword(this.username, this.username)
        .catch(error => {
          this.message = `${error.code} ---- ${error.message}`;
        })
        .then(userCredential => {
          debugger
          user.updateProfile({
            displayName: this.displayName
          });

          this.firestore
            .collection("users")
            .doc(user.uid)
            .set({ dateCreated: Date.now().toString()});

          this.router.navigate(["/landing"]);
        });
    } else {
      this.message = "Username and Password are Required";
    }
  }

  public login(): void {
    debugger
    this.fireAuth
      .signInWithEmailAndPassword(this.username, this.username)
      .catch(error => {
        this.message = `${error.code} ---- ${error.message}`;
      })
      .then(user => {
        if (user) {
          this.router.navigate(["/landing"]);
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
    this.loading = false;
  }
}
