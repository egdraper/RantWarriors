import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { AdminService } from "src/app/dm/assets/admin.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent {
  constructor(
    private adminService: AdminService,
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {
    this.firestore
      .collection("users")
      .doc(this.fireAuth.auth.currentUser.uid)
      .get()
      .subscribe(a => {
        if (a.data().admin) {
          this.adminService.isAdmin = true;
        }
      });
  }
}
