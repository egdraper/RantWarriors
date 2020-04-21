import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase } from "@angular/fire/database";
import { DbSessionService } from "./assets/dbSession";
import { ActivatedRoute, Router } from "@angular/router";
import { DbService } from "./assets/dbService";
import { Asset } from "./assets/add-asset/asset";

@Component({
  selector: "dm-screen",
  templateUrl: "./dm-screen.component.html",
  styleUrls: ["./dm-screen.component.scss"]
})
export class DmScreenComponent {
  constructor(
    public dbSessionService: DbSessionService,
    private dbService: DbService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      const gameName = params["game"];
      this.dbSessionService.loadGameSession(gameName);
    });
    // const bob = new Asset();
    // bob.name = "Bob";
    // this.dbSessionService.addToCreatureList(bob, "Creature");
  }

  public logOut(): void {
    this.dbService.signOut();
    this.router.navigate(["/"]);
  }

  public goHome(): void {
    this.router.navigate(["/landing"]);
  }

  public goAdmin(): void {
    this.router.navigate(["/admin"]);
  }
}
