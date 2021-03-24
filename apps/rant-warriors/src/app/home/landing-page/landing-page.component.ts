import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { AdminService } from "../../utils/admin.service";

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
    this.init()
  }
  
  public async init(): Promise<void> {
    await this.fireAuth.user.subscribe(user => {
      this.firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .subscribe(response => {
          const data = response.data() as any
          if (data.admin) {
            this.adminService.isAdmin = true;
          }
        })
    });
  }
}
